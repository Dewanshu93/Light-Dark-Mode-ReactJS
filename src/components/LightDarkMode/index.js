// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightModeOn: true}
  onLightMode = () => {
    this.setState(prevState => {
      return {isLightModeOn: false}
    })
  }
  onDarkMode = () => {
    this.setState(prevState => {
      return {isLightModeOn: true}
    })
  }
  render() {
    const {isLightModeOn} = this.state
    return (
      <div className="mainContainer">
        <div className={isLightModeOn ? 'lightContainer' : 'darkContainer'}>
          <h1 className={isLightModeOn ? 'headLight' : 'headDark'}>
            Click To Change Mode
          </h1>
          {isLightModeOn ? (
            <button className="btn1" type="button" onClick={this.onLightMode}>
              Light Mode
            </button>
          ) : (
            <button className="btn2" type="button" onClick={this.onDarkMode}>
              Dark Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}
export default LightDarkMode
