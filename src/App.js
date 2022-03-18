import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [date, setDate] =  useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ded7b3eafab45703fdd17ecd37f253e1`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="app">
      <div className="wrapper">
        <div className="container">
          <div className="search">
            <input
              className="search-input"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Enter Location"
              onKeyPress={searchLocation}
              type="text"
            />
          </div>
          <div className="top">
            <div className="location">
              {data.name ? <p className="place">{data.name}</p> : null}
              <div className="description">
                {data.main ? <p>{data.weather[0].description}</p> : null}
              </div>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp}°C</h1> : null}
            </div>
          </div>
          <div className="bottom">
            <div class="weather-item">
              <p>humidity</p>
              {data.main ? <p>{data.main.humidity}%</p> : null}
            </div>
            <div class="weather-item">
              <p>Pressure</p>
              {data.main ? <p>{data.main.pressure}hPa</p> : null}
            </div>
            <div class="weather-item">
              <p>Wind speed</p>
              {data.wind ? <p>{data.wind.speed}m/s</p> : null}
            </div>
            <div class="weather-item">
              <p>Longitude</p>
              {data.coord ? <p>{data.coord.lon}</p> : null}
            </div>
            <div class="weather-item">
              <p>Latitude</p>
              {data.coord ? <p>{data.coord.lat}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
