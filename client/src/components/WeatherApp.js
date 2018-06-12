import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import ForecastWidget from './ForecastWidget'
import fetch from 'isomorphic-fetch'
import moment from 'moment'

class WeatherApp extends React.Component {
  static propTypes = {
    appKey: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { location: '' }
  }

  // we get 5 days worth of data in three-hour increments; this
  // function loops through the data and only grabs today's data, or
  // data from 2pm.
  processData(data) {
    const count = data.cnt
    const items = data.list

    const newItems = []
    for (let i = 0; i < items.length; ++i) {
      const item = items[i]
      const time = moment.unix(item.dt)

      if (i === 0 || time.hour() === 14) {
        item.time = time
        newItems.push(item)
      }
    }

    data.list = newItems
    return data
  }

  async handleSearch(value) {
    this.setState({ location: value })

    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${this.props.appKey}&units=${this.props.units}`)
    if (response.status >= 400) {
      this.setState({ location: value, error: response.status, message: response.statusText })
    } else {
      const data = this.processData(await response.json())
      this.setState({ location: value, data })
    }
  }

  render() {
    let mainContent
    if (this.state.data) {
      mainContent = <ForecastWidget data={this.state.data} units={this.props.units} />
    } else if (this.state.error) {
      mainContent = <h1 className="error-message">Error: {this.state.error} {this.state.message}</h1>
    }

    return (<main>
      <SearchBar handleSearch={(value) => this.handleSearch(value)} />
      {mainContent}
    </main>)
  }
}

export default WeatherApp