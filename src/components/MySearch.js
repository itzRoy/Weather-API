import React from "react";
// import "./App.css";


class MySearch extends React.Component{
    render(){
        return(
          <header>
            <form>
            <input placeholder={"City Name"}/>
            <button type="submit">FIND WEATHER</button>
            </form>
          </header>
        );
    }
}
export default MySearch;