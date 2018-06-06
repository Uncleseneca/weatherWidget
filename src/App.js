import React, { Component } from 'react';
import Widget from './Widget';
import './App.css';

const weatherData = {
  date: {
    day: 21,
    month: 'may',
  },
  temperature: 79,
  weatherDescription: 'Cloudy Skies',
  city: 'Sicklerville, New Jersey ',
  stats: [
    {
      type: 'wind',
      value: '2 MPH',
    },
    {
      type: 'humidity',
      value: '33 %',
    },
    {
      type: 'sun',
      value: '83 %',
    },
    {
      type: 'humidity',
      value: '33 %',
    },

    {
      type: 'wind',
      value: '2 MPH',
    },
    {
      type: 'sun',
      value: '83 %',
    },
    {
      type: 'wind',
      value: '2 MPH',
    },
    {
      type: 'sun',
      value: '83 %',
    },
    {
      type: 'humidity',
      value: '33 %',
    },
  ],
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget {...weatherData} />
      </div>
    );
  }
}

export default App;
