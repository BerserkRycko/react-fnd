import { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

class AlertComponent extends Component {
  render () {
    const { variant, title, container, visible } = this.props
    // variant -> 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
    return (
      <div>
        {visible
          ? (
            <Alert variant={variant}>
              <Alert.Heading>{title}</Alert.Heading>
              <p>
                {container}
              </p>
              <hr />
            </Alert>
            )
          : null}
      </div>
    )
  }
}

export default AlertComponent
