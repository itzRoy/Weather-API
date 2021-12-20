import React from "react";

class Main extends React.Component {
  render() {
    return (
      <main className="card">
        <img src={this.props.icon} alt="" />
        <p>{this.props.desc}</p>
        <div>
          <strong>Temperature </strong>
          <span>
            {" "}
            {this.props.min}° to {this.props.max}℃
          </span>
        </div>
        <div>
          <strong>Humidity </strong>
          <small> {this.props.hum}% </small>
          <strong> Pressure </strong>
          <small> {this.props.press}</small>
        </div>
      </main>
    );
  }
}

export default Main;
