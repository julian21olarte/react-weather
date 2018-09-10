import React from 'react';

const WeatherData = ({name, icon, description, temp}) => (
  <div>
    <h3 className="mb-3">
      {name}
      <img src={`http://openweathermap.org/img/w/${icon}.png`} className="rounded"/>
    </h3>
    <h4>Temperatura: {temp}°C</h4>
    <p>{description}</p>
  </div>
);

export default WeatherData;