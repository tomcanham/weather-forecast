import React from 'react'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  // to allow pressing Enter to submit the search
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSubmit()
    }
  }

  // both pressing Enter and clicking on the search icon flow here
  handleSubmit() {
    if (this.state.value.length > 0) {
      this.props.handleSearch(this.state.value)
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  clearLocation() {
    this.setState({ value: '' })
  }

  render() {
    return (<div className="search">
      <i className="fa fa-search" onClick={() => this.handleSubmit()}></i>
      <input
        id="cityBox"
        type="text"
        name="city"
        autoComplete="off"
        placeholder="Please enter the name of a city..."
        value={this.state.value}
        onChange={(e) => this.handleChange(e)}
        onKeyPress={(e) => this.handleKeyPress(e)}>
      </input>
      <i className="fas fa-times" onClick={() => this.clearLocation()}></i>
    </div>)
  }
}

export default SearchBar