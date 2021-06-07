import React from "react";
import FormatDate from "./FormatDate";

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
        <img src={props.data.iconUrl} alt={props.data.description}></img>
        <span className="temperature">{props.data.temperature}</span>
        <span className="unit">°C</span>
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