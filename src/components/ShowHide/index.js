// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: true, last: true}

  firstName = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  lastName = () => {
    this.setState(prevState => ({first: !prevState.last}))
  }

  render() {
    const {first, last} = this.state
    const myFirstName = first ? (
      <div className="fn">
        <h1 className="head1">Joe</h1>
      </div>
    ) : null

    const myLastName = last ? (
      <div className="fn">
        <h1 className="head1">Jonas</h1>
      </div>
    ) : null

    return (
      <div className="container">
        <h1 className="heading"> Show/Hide </h1>
        <div className="butt">
          <button className="button" type="button" onClick={this.firstName()}>
            Show/Hide Firstname
          </button>
          <button className="button" type="button" onClick={this.lastName()}>
            Show/Hide Lastname
          </button>
        </div>
      </div>
    )
  }
}

export default ShowHide
