import React from "react";

import storm from "../img/weather-icons/storm.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import fog from "../img/weather-icons/fog.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import unknown from "../img/weather-icons/unknown.svg";

class Card extends React.Component {
  getWeatherIcon(id) {
   let icon = ''
    switch (true) {
      case id < 300:
        icon = storm
        break;
      case id < 500: icon = drizzle
        break;
      case id < 600: icon = rain
        break;
      case id < 700: icon = snow
        break;
      case id < 800: icon = fog
        break;
      case id > 801: icon = cloudy
        break;
      case id === 800: icon = clear
        break;
      case id === 801: icon = partlycloudy
        break;
      default: icon = unknown
    }
    return icon;
  }
  
  render() {
      if (!this.props.listOfWeathers) {
        return <div className="cardsContainer"></div>;
      }
    return (
      <section>
        <div className="cardsContainer">
          {this.props.listOfWeathers.map((item) => {
            return (
              <div className="cards">
                <p> {item.dt_txt.substring(11, 16)} </p>
                <img src={this.getWeatherIcon(item.weather[0].id)} alt="" />
                <p> {Math.floor(item.main.temp)} &#xb0;C </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Card;