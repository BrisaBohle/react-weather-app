import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props){
  const apiKey = "5077d3232d041e2158e79942007bee5b";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
Axios.get(apiUrl).then(handleResponse);
function handleResponse(response){

}
  return (
  <div className="WeatherForecast">
    <div className="row">
      <div className="col">
        <div className="WeatherForecast-day" >THU</div>
        <WeatherIcon code="01d" size={36}/>
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-max" >15°</span>
          <span className="WeatherForecast-min" >05°</span>
        </div>
      </div>
    </div>
  </div>);
}