import React from "react";

import partlycloudy from '../img/weather-icons/partlycloudy.svg';


class main extends React.Component{
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

const Main = (prop) => {
    
    return(
        <main className="card">
          <img src={prop.src}/>
          <p>overcast clouds</p>
          <div><strong>Temperature </strong><span> {prop.temp}° to {prop.temp2}℃</span></div>
          <div><bold>Humidity </bold><small> {prop.hum}% </small><bold> Pressure </bold><small> {prop.pres}</small></div>
        </main>
    )
}

export default Main;