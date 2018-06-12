import React from 'react'
import PropTypes from 'prop-types'

const titleCase = (phrase) => {
  return phrase.toLowerCase()
    .split(' ')
    .map((word) => (word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ')
}

const ForecastToday = (props) => {
  const { today, units } = props
  let symbol
  if (units === 'metric') {
    symbol = <div className="degrees">&#x2103;</div>
  } else {
    symbol = <div className="degrees">&#x2109;</div>
  }

  return (<div className="today">
    <span className="temperature">{Math.round(today.main.temp)}</span>
    <span className="details">
      {symbol}
      <div className="description">{titleCase(today.weather[0].description)}</div>
      <div className="humidity">{today.main.humidity}% Humidity</div>
    </span>
  </div>)
}

ForecastToday.propTypes = {
  today: PropTypes.object,
  units: PropTypes.oneOf(['metric', 'imperial']).isRequired
}

const ForecastUpcoming = (props) => {
  const { list } = props
  const upcoming = []

  for (let i = 1; i < list.length; ++i) {
    const item = list[i]
    let className = 'day'
    if (i === list.length - 1) {
      className = 'day day-last'
    }
    upcoming.push(<span key={`day-${i}`} className={className}>
      <div>{item.time.format('MMM D')}</div>
      <div><img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} /></div>
      <div>{Math.round(item.main.temp)}</div>
    </span>)
  }

  return <div className="upcoming">{upcoming}</div>
}

ForecastUpcoming.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

const ForecastWidget = (props) => {
  const { data, units } = props
  const today = data.list[0]

  return (<div className="forecast">
    <ForecastToday today={today} units={units} />
    <ForecastUpcoming list={data.list} />
  </div >)
}

ForecastWidget.propTypes = {
  data: PropTypes.object.isRequired,
  units: PropTypes.oneOf(['metric', 'imperial']).isRequired
}

export default ForecastWidget