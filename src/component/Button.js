import { Component } from 'react'
import ButtonBoot from 'react-bootstrap/Button'

class Button extends Component {
  render () {
    return (
      <ButtonBoot {...this.props} variant='' />
    )
  }
}

export default Button
