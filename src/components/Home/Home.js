import React from 'react';
import './Home.css';
import WeatherData from './../WeatherData/WeatherData';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      cityName: '',
      weather: null
    }
    this.searchWeather = this.searchWeather.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.getCities();
  }

  changeCity(event) {
    const cityName = event.target.selectedOptions[0].value;
    console.log(cityName);
    this.setState({cityName});
  }

  async searchWeather() {
    let url = `http://api.openweathermap.org/data/2.5/weather?appId=511e6db17d58303c967ca52bf616f6bf&q=${this.state.cityName.toString()}&lang=es&units=metric`;
    let weather = await fetch(url);
    weather = await weather.json();
    console.log(weather);
    this.setState({weather});
  }

  async getCities() {
    const url = 'https://restcountries.eu/rest/v2/regionalbloc/usan';
    try {
      let cities = await fetch(url);
      cities = await cities.json();
      this.setState({cities});
    } catch(e) {
      console.log(e.message);
    }
  }

  render = () => (
    <div className="container d-flex justify-content-center align-items-center home">
      <div className="card w-100 shadow">
        <div className="card-body">
          <h4 className="card-title text-success">Weather</h4>
          <p className="card-text">Select a city...</p>
          <select className="custom-select mb-3" id="cities" onChange={this.changeCity}>
            {
              this.state.cities.map(city => {
                return (
                  <option key={city.name} value={city.capital}>
                    {city.capital}
                  </option>
                )
              })
            }
          </select>
          <button className="btn btn-large btn-success" onClick={this.searchWeather}>Search</button>
        </div>
        <div className="card-footer bg-white">
            {
              (() => {
                if(this.state.weather) {
                  return (
                    <WeatherData 
                      name={this.state.weather.name}
                      temp={this.state.weather.main.temp}
                      description={this.state.weather.weather[0].description}
                      icon={this.state.weather.weather[0].icon}>
                    </WeatherData>
                  );
                }
              })()
            }
        </div>
      </div>
    </div>
  );
}

export default Home;
