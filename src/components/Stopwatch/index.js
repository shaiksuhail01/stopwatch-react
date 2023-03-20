import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {minutesEl: 0, secondsEl: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onClickStartButton = () => {
    this.timerId = setInterval(this.timerStart, 1000)
  }

  onClickStopButton = () => {
    clearInterval(this.timerId)
  }

  onClickResetButton = () => {
    clearInterval(this.timerId)
    this.setState({minutesEl: 0, secondsEl: 0})
  }

  timerStart = () => {
    this.setState(prevState => ({secondsEl: prevState.secondsEl + 1}))
  }

  getSecondsAndMinutes = () => {
    const {minutesEl, secondsEl} = this.state

    const remainingSeconds = minutesEl * 60 + secondsEl
    const minutes = Math.floor(remainingSeconds / 60)
    const seconds = Math.floor(remainingSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="divContainer">
        <div>
          <h1 className="heading">Stopwatch</h1>
          <div className="timerContainer">
            <div className="headingContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timerText">Timer</p>
            </div>
            <h1 className="time">{this.getSecondsAndMinutes()}</h1>
            <div className="buttonsContainer">
              <button
                type="button"
                className="buttons startButton"
                onClick={this.onClickStartButton}
              >
                Start
              </button>
              <button
                type="button"
                className="buttons stopButton"
                onClick={this.onClickStopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="buttons resetButton"
                onClick={this.onClickResetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
