import React from "react";

import partlycloudy from '../img/weather-icons/partlycloudy.svg';


class Main extends React.Component{
    render(){
        return(
            <main className="card">
          <img src={this.props.icon} alt="partlycloudy"/>
          <p>{this.props.desc}</p>
          <div><strong>Temperature </strong><span> {this.props.min}° to {this.props.max}℃</span></div>
          <div><bold>Humidity </bold><small> {this.props.hum}% </small><bold> Pressure </bold><small> {this.props.press}</small></div>
          </main>
        );
    }
}

// const Main = (prop) => {
    
//     return(
//         <main className="card">
//           <img src={prop.src}/>
//           <p>overcast clouds</p>
//           <div><strong>Temperature </strong><span> {prop.temp}° to {prop.temp2}℃</span></div>
//           <div><bold>Humidity </bold><small> {prop.hum}% </small><bold> Pressure </bold><small> {prop.pres}</small></div>
//         </main>
//     )
// }

export default Main;