import React from 'react'
import ReactDOM from 'react-dom'
import WeatherApp from './components/WeatherApp'


ReactDOM.render(
  <WeatherApp appKey={'654dbba092e9b415621be799ca88a546'} units={'imperial'} />,
  document.getElementById('root')
);

module.hot.accept();