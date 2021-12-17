import React, { Component } from "react";
// import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import MySearch from "./components/MySearch";
import Main from "./components/mainW";
import Day from "./components/dayW";


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
          <MySearch/>
          
          <Main/>

          <Day/>
          
        </div>
      </div>
      
    );
  }
}

export default App;
