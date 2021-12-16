import React, { Component } from "react";
// import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

//images
import clear from './img/weather-icons/clear.svg';
import cloudy from './img/weather-icons/cloudy.svg';
import drizzle from './img/weather-icons/drizzle.svg';
import fog from './img/weather-icons/fog.svg';
import mostlycloudy from './img/weather-icons/mostlycloudy.svg';
import partlycloudy from './img/weather-icons/partlycloudy.svg';
import rain from './img/weather-icons/rain.svg';
import snow from './img/weather-icons/snow.svg';
import storm from './img/weather-icons/storm.svg';


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
          <header>
            <form>
            <input placeholder={"City Name"}/>
            <button type="submit">FIND WEATHER</button>
            </form>
          </header>
          <main className="card">
          <img src={partlycloudy} alt="partlycloudy"/>
          <p>overcast clouds</p>
          <div><strong>Temperature </strong><span> 10° to 11℃</span></div>
          <div><bold>Humidity </bold><small> 78% </small><bold> Pressure </bold><small> 100848</small></div>
          </main>
          <section>
            <div className="cardsContainer">
              <div className="cards">
                <p>03:00</p>
                <img src={partlycloudy} alt="partlycloudy"/>
                <p>8℃</p>
              </div>

              <div className="cards">
                <p>06:00</p>
                <img src={partlycloudy} alt="partlycloudy"/>
                <p>9℃</p>
              </div>

              <div className="cards">
                <p>09:00</p>
                <img src={clear} alt="clear"/>
                <p>14℃</p>
              </div>

              <div className="cards">
                <p>12:00</p>
                <img src={clear} alt="clear"/>
                <p>17℃</p>
              </div>

              <div className="cards">
                <p>015:00</p>
                <img src={clear} alt="clear"/>
                <p>18℃</p>
              </div>

              <div className="cards">
                <p>18:00</p>
                <img src={clear} alt="clear"/>
                <p>16℃</p>
              </div>

              <div className="cards">
                <p>21:00</p>
                <img src={partlycloudy} alt="partlycloudy"/>
                <p>13℃</p>
              </div>
            </div>

          </section>
        </div>
        {/* <SayHi />
        <SayHello color="black" name={this.state.name} />
        <Search handleInput={this.handleInputChange} /> */}
      </div>
      
    );
  }
}

export default App;
