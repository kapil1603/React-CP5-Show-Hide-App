// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: true, last: true}

  firstName = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  lastName = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state
    // const myFirstName =

    // const myLastName =

    return (
      <div className="container">
        <h1 className="heading"> Show/Hide </h1>
        <div className="butt">
          <div>
            <button className="button" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {first ? (
              <div className="fn">
                <p className="head1">Joe</p>
              </div>
            ) : null}
          </div>
          <div>
            <button className="button" type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {last ? (
              <div className="fn">
                <p className="head1">Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
