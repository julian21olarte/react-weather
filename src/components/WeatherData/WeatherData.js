import React from 'react';
import PropTypes from 'prop-types';

const WeatherData = ({name, icon, description, temp}) => (
  <div>
    <h3 className="mb-3">
      {name}
      <img src={`http://openweathermap.org/img/w/${icon}.png`} className="rounded" alt={name}/>
    </h3>
    <h4>Temperatura: {temp}°C</h4>
    <p>{description}</p>
  </div>
);

WeatherData.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
};

export default WeatherData;