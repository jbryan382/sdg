import React, { Component } from 'react'

export class App extends Component {
  state = {
    temp: Math.ceil(Math.random() * 255),
  }

  handleTempChange = event => {
    console.log(event)
    console.log(event.target.value)
    this.setState({ temp: event.target.value })
  }

  render() {
    return (
      <>
        <h1>Thermometer</h1>
        <div
          className="thermometer"
          style={{ backgroundColor: `hsl(${this.state.temp}, 100%, 50%)` }}
        ></div>
        <p>Temp:{this.state.temp}</p>
        <input
          type="range"
          max={255}
          value={this.state.temp}
          // onChange={event => this.setState({ temp: event.target.value })}
          onChange={this.handleTempChange}
        />
      </>
    )
  }
}

export default App
