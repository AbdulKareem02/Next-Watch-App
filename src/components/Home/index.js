import {Component} from 'react'
import Navbar from '../Navbar'

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="home-bg-container">
          <h1>Home container</h1>
        </div>
      </>
    )
  }
}

export default Home
