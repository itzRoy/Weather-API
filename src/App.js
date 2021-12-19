import React, { Component } from "react";
// import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import MySearch from "./components/MySearch";
import Main from "./components/mainW";

import Card from "./components/dayW"


//images
import clear from './img/weather-icons/clear.svg';
import partlycloudy from './img/weather-icons/partlycloudy.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Roy"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <div className="siteWrapper">
          <MySearch />

          <Main
            icon={clear}
            min={fakeWeatherData.list[0].main.temp_min}
            max={fakeWeatherData.list[0].main.temp_max}
            hum={fakeWeatherData.list[0].main.humidity}
            press={fakeWeatherData.list[0].main.pressure}
            desc={fakeWeatherData.list[0].weather[0].description}
          ></Main>
          <section>
            <div className="cardsContainer">
              <Card time="03:00" img={partlycloudy} deg="8"></Card>
              <Card time="06:00" img={partlycloudy} deg="9"></Card>
              <Card time="09:00" img={clear} deg="14"></Card>
              <Card time="12:00" img={clear} deg="17"></Card>
              <Card time="15:00" img={clear} deg="18"></Card>
              <Card time="18:00" img={clear} deg="16"></Card>
              <Card time="21:00" img={partlycloudy} deg="13"></Card>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
