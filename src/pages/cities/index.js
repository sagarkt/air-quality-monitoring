import React, { Component } from 'react';
import CityCard from './components/city_card';
import sinceTimeFormatter from '../../utilities/since_time_formatter';

export default class Home extends Component {

  ws = new WebSocket('wss://city-ws.herokuapp.com');

  constructor() {
    super();
    this.state = { allCities: {} };
  }

  componentDidMount() {
    this.ws.onopen = () => {
      console.log('connected');
    }

    this.ws.onmessage = evt => {
      let cities = JSON.parse(evt.data);
      let allCities = this.state.allCities;
      let lastUpdatedDate = new Date();
      cities.forEach((city) => {
        allCities[city.city] = allCities[city.city] || {};
        allCities[city.city]['old'] = allCities[city.city]['old'] || [];
        allCities[city.city]['old'].push(city.aqi);
        allCities[city.city]['latest'] = {
          city: city.city,
          aqi: city.aqi,
          lastUpdatedDate: sinceTimeFormatter(lastUpdatedDate),
          old: allCities[city.city]['old']
        };
      });
      this.setState({allCities: allCities});
    }

    this.ws.onclose = () => {
      console.log('disconnected');
    }
  }

  render() {
    let cities = [];
    for(let city in this.state.allCities) {
      cities.push(<CityCard city={this.state.allCities[city]['latest']} key={this.state.allCities[city]['latest'].city}/>);
    }
    return cities;
  }
}
