import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./weather.module.css";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState();

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
      });
  }, [country]);

  if (weather) {
    return (
      <div className={classes.weatherArea}>
        <h3>Forecast for {country.capital}</h3>
        <p>
          Right now it is {weather.main.temp} °C, {weather.weather[0].main},
          wind {weather.wind.speed} m/s
        </p>
        <img
          className={classes.weatherImage}
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
        <p></p>
      </div>
    );
  }
};

export default Weather;
