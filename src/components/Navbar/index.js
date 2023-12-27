import {Component} from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import './index.css'

class Navbar extends Component {
  onClickLogout = () => <Redirect to="/login" />

  Popup = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            Trigger
          </button>
        }
      >
        {close => (
          <>
            <div>
              <p>React is a popular and widely used programming language</p>
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
            <button type="button" onClick={this.onClickLogout}>
              Confirm
            </button>
          </>
        )}
      </Popup>
    </div>
  )

  render() {
    return (
      <>
        <div className="navbar-bg-container">
          <img
            src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="nav-web-logo"
          />
          <FaUserCircle className="userIcon" />
          {this.Popup()}
        </div>
      </>
    )
  }
}

export default Navbar
