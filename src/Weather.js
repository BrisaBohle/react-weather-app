import React from "react";
import "./Weather.css";

export default function Weather(){
  return (
  <div className="Weather">
    <div className="container">
      <form>
        <div className="row">
          <div className="col-9">
            <input className="form-control w-100" autoFocus="on"type="search" placeholder="Enter a city..."/>
          </div>
          <div className="col-3">
            <button className="btn btn-primary w-100" value="search" type="submit">Search</button>
          </div>
        </div>
      </form>
      <h1>City</h1>
      <ul>
        <li>
          Weekday 00:00
        </li>
        <li>
          Weather condition
        </li>
      </ul>
      <div className="row">
        <div className="col-6 mt-3">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="img-description"></img>
          <span className="temperature">6</span>
          <span className="unit">°C</span>
          </div>
        <div className="col-6 mt-3">
          <ul>
            <li>
              Precipitation:50%
            </li>
            <li>
              Humidity: 70%
            </li>
            <li>
              Wind: 7km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>);
}