import {Component} from 'react'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {isPasswordVisible: false, username: '', password: '', errorMsg: ''}

  showAndHidePassword = () => {
    this.setState(pervSts => ({isPasswordVisible: !pervSts.isPasswordVisible}))
  }

  onUsername = e => {
    this.setState({username: e.target.value})
  }

  onPassword = e => {
    this.setState({password: e.target.value})
  }

  usernameInput = () => {
    const {username} = this.state
    return (
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={this.onUsername}
          value={username}
          placeholder="Username"
        />
      </div>
    )
  }

  passwordInput = () => {
    const {password} = this.state
    const {isPasswordVisible} = this.state
    const type = isPasswordVisible ? 'text' : 'password'
    return (
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={type}
          onChange={this.onPassword}
          value={password}
          placeholder="Password"
        />
        <div className="show-password-container">
          <input
            id="show-password"
            type="checkbox"
            onClick={this.showAndHidePassword}
          />
          <label htmlFor="show-password">Show Password</label>
        </div>
      </div>
    )
  }

  submitLoginForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'Post',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const {history} = this.props
      const jwtToken = data.jwt_token
      Cookies.set('jwtToken', jwtToken, {expires: 30})

      history.push('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {errorMsg} = this.state
    return (
      <div className="login-bg-container">
        <form className="login-card-container" onSubmit={this.submitLoginForm}>
          <img
            className="web-logo-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          {this.usernameInput()}
          {this.passwordInput()}
          <button type="submit">Login</button>
          <p className="error-msg">{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default Login
