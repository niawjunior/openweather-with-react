import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key ='11798f42c4b584e558803d0def688edf';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: 'Khon Kaen, TH',
      description: '',
      temp: ''
    }
  }
  componentDidMount() {
    this.grabWeather(this.state.city);
  }
  grabWeather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
    .then(response => response.json())
    .then(json => {
      this.setState({description: json.weather[0].description})
      this.setState({temp: json.main.temp})
    });
  }
  render(){
    return (
      <div>
        <h1>Weather Report for {this.state.city}!</h1>
        <h2>description = {this.state.description}</h2>
        <h2>Temp = {this.state.temp- 273.15}  ํC</h2>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));