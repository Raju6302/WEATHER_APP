import Search from "../components/search/search";
import CurrentWeather from "../components/current-weather/CurrentWeather";
import Forecast from "../components/forcast/forecast";
import {Weather_API_URL, Weather_API_Key} from "../api";
import { useState } from "react";
import "./entryfile.css"

const EntryFile = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherfetch = fetch(
      `${Weather_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${Weather_API_Key}&units=metric`
    );
    const forecastfetch = fetch(
      `${Weather_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_API_Key}&units=metric`
    );

    Promise.all([currentWeatherfetch, forecastfetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(currentWeather);
  console.log(forecast);

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
        </div>
    )
}

export default EntryFile;