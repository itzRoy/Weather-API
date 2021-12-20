import React from "react";

class MySearch extends React.Component {


  render() {
    return (
      <header>
        {this.props.error ? error() : null}
        <form onSubmit={this.props.loadweather}>
          <input
            placeholder="City Name"
            name="city"
            type="text"
            id="input-name"
            spellCheck="false"
            defaultValue={"Tripoli"}
          />
          <button type="submit">FIND WEATHER</button>
        </form>
      </header>
    );
  }
}

function error() {
  return <div role="alert">Please Enter City Name</div>;
}

export default MySearch;
