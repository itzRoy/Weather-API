import React from "react";

import clear from '../img/weather-icons/clear.svg';
import partlycloudy from '../img/weather-icons/partlycloudy.svg';

// class Day extends React.Component{
//     render(){
//         return(

          
//             <section>
//                 <div className="cardsContainer">
//                 <div className="cards">
//                     <p>03:00</p>
//                     <img src={partlycloudy} alt="partlycloudy"/>
//                     <p>8℃</p>
//                 </div>

//                 <div className="cards">
//                     <p>06:00</p>
//                     <img src={partlycloudy} alt="partlycloudy"/>
//                     <p>9℃</p>
//                 </div>

//                 <div className="cards">
//                     <p>09:00</p>
//                     <img src={clear} alt="clear"/>
//                     <p>14℃</p>
//                 </div>

//                 <div className="cards">
//                     <p>12:00</p>
//                     <img src={clear} alt="clear"/>
//                     <p>17℃</p>
//                 </div>

//                 <div className="cards">
//                     <p>015:00</p>
//                     <img src={clear} alt="clear"/>
//                     <p>18℃</p>
//                 </div>

//                 <div className="cards">
//                     <p>18:00</p>
//                     <img src={clear} alt="clear"/>
//                     <p>16℃</p>
//                 </div>

//                 <div className="cards">
//                     <p>21:00</p>
//                     <img src={partlycloudy} alt="partlycloudy"/>
//                     <p>13℃</p>
//                 </div>
//                 </div>

//             </section>
//         );
//     }
// }

const Card = (p) =>{
    return(
        <div className="cards">
            <p>{p.time}</p>
            <img src={p.img}/>
            <p>{p.deg}℃</p>
        </div>
    )
}


export default Card;