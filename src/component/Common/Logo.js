import { Component } from 'react'
import logo from '../../assets/logo.png'

class LogoComponent extends Component {
  render () {
    return (
      <div>
        <img className='logo-Component' alt='logo_foodin' src={logo} />
      </div>
    )
  }
}

export default LogoComponent
