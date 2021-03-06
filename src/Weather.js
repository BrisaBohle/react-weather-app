import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import DisplayWeather from "./DisplayWeather";
import WeatherForecast from "./WeatherForecast";
export default function Weather(props){
  
   const [weatherData, setWeatherData] = useState ({ready: false});
   const[city, setCity] = useState(props.defaultCity);
   function handleResponse(response){
      setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      date: new Date (response.data.dt *1000),
      city: response.data.name,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
    
      }
      function search(){
    const apiKey = "5077d3232d041e2158e79942007bee5b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
      }
function handleSubmit(event){
  event.preventDefault();
 search();
}
function handleCityForm(event){
setCity(event.target.value);
}
  if (weatherData.ready){
    return (
    <div className="Weather">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input className="form-control w-100" autoFocus="on"type="search" placeholder="Enter a city..." onChange={handleCityForm}/>
            </div>
            <div className="col-3">
              <button className="btn btn-primary
              w-100 search-button" value="search" type="submit">Search</button>
            </div>
          </div>
        </form>
        <DisplayWeather data={weatherData}/>    
        <WeatherForecast coordinates={weatherData.coordinates}/>   
      </div>
    </div>);} 
  else{ 
    search();
    return"Loading.."
    }
}