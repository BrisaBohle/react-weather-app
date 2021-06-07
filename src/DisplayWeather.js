import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function DisplayWeather(props){
  
  return (
  <div className="DisplayWeather">
    <h1>{props.data.city}</h1>
    <ul>
      <li>
 <FormatDate date={props.data.date} />           
      </li>
      <li className="text-capitalize">
       {props.data.description}
      </li>
    </ul>
    <div className="row">
      <div className="col-6 mt-3">
        
          <div className="row">
            <div className="col-3"><WeatherIcon code={props.data.icon}/> </div>
          
          <div className="col-9">
          <WeatherTemperature celsius={props.data.temperature}/></div>
        </div>
      </div>
      <div className="col-6 mt-3">
        <ul>
          <li>
            Humidity: {props.data.humidity}%
          </li>
          <li>
            Wind: {props.data.wind}km/h
          </li>
        </ul>
      </div>
    </div>
  </div>
    
  );
}