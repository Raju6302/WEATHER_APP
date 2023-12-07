import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <div className="icon-and-description">
          <img
            alt="weather"
            src={`icons/${data.weather[0].icon}.png`}
            className="weather-icon"
          />
          <p className="wether-description">{data.weather[0].description}</p>
          </div>
        </div>

        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">wind  : </span>
            <span className="parameter-value">{data.wind.speed} km/h</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">pressure  : </span>
            <span className="parameter-value">{data.main.pressure} </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like  : </span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°c
            </span>
          </div>
          <div className="parameter-row">
            <p className="temparature">{Math.round(data.main.temp)}°c</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
