import React from "react";

import partlycloudy from '../img/weather-icons/partlycloudy.svg';


class Main extends React.Component{
    render(){
        return(
            <main className="card">
          <img src={partlycloudy} alt="partlycloudy"/>
          <p>overcast clouds</p>
          <div><strong>Temperature </strong><span> 10° to 11℃</span></div>
          <div><bold>Humidity </bold><small> 78% </small><bold> Pressure </bold><small> 100848</small></div>
          </main>
        );
    }
}

export default Main;