// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    fnStatus: 'Hide',
    lnStatus: 'Hide',
    firstName: 'Joe',
    lastName: 'Jonas',
  }

  triggerFNButton = () => {
    const {fnStatus} = this.state
    if (fnStatus === 'Hide') {
      this.setState(() => ({
        fnStatus: 'Show',
      }))
    } else {
      this.setState(() => ({
        fnStatus: 'Hide',
      }))
    }
  }

  triggerLNButton = () => {
    const {lnStatus} = this.state
    if (lnStatus === 'Hide') {
      this.setState(() => ({
        lnStatus: 'Show',
      }))
    } else {
      this.setState(() => ({
        lnStatus: 'Hide',
      }))
    }
  }

  render() {
    const {firstName, fnStatus, lastName, lnStatus} = this.state

    const fnClass = fnStatus === 'Hide' && 'hide'

    const lnClass = lnStatus === 'Hide' && 'hide'

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="btn-container">
          <div>
            <button
              type="button"
              onClick={this.triggerFNButton}
              className="button"
            >
              Show/Hide Firstname
            </button>
            <p className={`${fnClass} name`}>{firstName}</p>
          </div>
          <div>
            <button
              type="button"
              onClick={this.triggerLNButton}
              className="button"
            >
              Show/Hide Lastname
            </button>
            <p className={`${lnClass} name`}>{lastName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
