// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAcceleration = () => {
    const {speed} = this.state
    if (speed >= 0 && speed < 200) {
      this.setState(pervState => ({speed: pervState.speed + 10}))
    }
  }

  applyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(pervState => ({speed: pervState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="SPEEDOMETER"
        />
        <h1 className="speed-limit">Speed is {speed}mph</h1>
        <p className="limit-instruction">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button
            className="button acceleration-button"
            type="button"
            onClick={this.onAcceleration}
          >
            Accelerate
          </button>
          <button
            className="button brake-button"
            type="button"
            onClick={this.applyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
