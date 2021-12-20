import React, { Component } from "react";
// import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import MySearch from "./components/MySearch";
import Main from "./components/mainW";
import Card from "./components/dayW";

//images
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/clear.svg";

const API_Key = "af1e3f1ea721e21988a67226f4363ab6";

class App extends Component {
  state = {
    city: undefined,
    min_temp: undefined,
    max_temp: undefined,
    pressure: undefined,
    humidity: undefined,
    description: "",
    error: false,
    weatherIcon: {
      clear: clear,
      cloudy: cloudy,
      drizzle: drizzle,
      fog: fog,
      mostlycloudy: mostlycloudy,
      partlycloudy: partlycloudy,
      rain: rain,
      snow: snow,
      storm: storm,
    }
  };

  constructor() {
    super();

    
  }
  
  getWeather = async (e) => {
    e.preventDefault();

    const cityName = e.target.elements.city.value;

    try {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&appid=${API_Key}`
      );
      let response = await api_call.json();
      (function () {
        response.list.length = 7;
      })();
      // let items = () => response.list.pop();
      // items();
      this.setState({ listOfWeathers: response.list });
      this.setState({
        city: response.city.name,
        min_temp: response.list[0].main.temp_min,
        max_temp: response.list[0].main.temp_max,
        pressure: response.list[0].main.pressure,
        humidity: response.list[0].main.humidity,
        description: response.list[0].weather[0].description,
      });

      this.get_WeatherIcon(this.state.weatherIcon, response.list[0].weather[0].id);
      this.setState({ error: false });
    } catch (err) {
      this.setState({ error: true });
    }
  };

  get_WeatherIcon(icon ,rangeID) {
    switch (true) {
      case rangeID < 300:
        this.setState({ icon: this.state.weatherIcon.storm });
        break;
      case rangeID < 500:
        this.setState({ icon: this.state.weatherIcon.drizzle });
        break;
      case rangeID < 600:
        this.setState({ icon: this.state.weatherIcon.rain });
        break;
      case rangeID < 700:
        this.setState({ icon: this.state.weatherIcon.snow });
        break;
      case rangeID < 800:
        this.setState({ icon: this.state.weatherIcon.fog });
        break;
      case rangeID > 801 && rangeID <= 805:
        this.setState({ icon: this.state.weatherIcon.cloudy });
        break;
      case rangeID === 800:
        this.setState({ icon: this.state.weatherIcon.clear });
        break;
      case rangeID === 801:
        this.setState({ icon: this.state.weatherIcon.partlycloudy });
        break;
      default:
        this.setState({ icon: this.state.weatherIcon.clear });
    }
    
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };
  
  render() {
    
    return (
      <div className="app">
        <MySearch
          loadweather={this.getWeather}
          error={this.state.error}
          
        />
        <Main
          icon={this.state.icon}
          min={Math.floor(this.state.min_temp)}
          max={Math.floor(this.state.max_temp)}
          hum={this.state.humidity}
          press={this.state.pressure}
          desc={this.state.description}
        />
        <Card listOfWeathers={this.state.listOfWeathers} />
      </div>
    );
  }
}

export default App;
