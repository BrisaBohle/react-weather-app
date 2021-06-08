import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import Axios from "axios";

export default function WeatherForecast(props){
 let [loaded, setLoaded] = useState(false);
 let [forecast, setForecast] = useState(null);

 useEffect(() =>{
  setLoaded(false);
 }, [props]);

 function handleResponse(response){
  setForecast(response.data.daily);
  setLoaded(true)
}

if (loaded){ 
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index < 5){
            return(
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast}/>
              </div>
            )} else {return null;}
          })}
          
        </div>
      </div>);
  } else { 
  const apiKey = "5077d3232d041e2158e79942007bee5b";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  Axios.get(apiUrl).then(handleResponse);
  return null;
}
    
}