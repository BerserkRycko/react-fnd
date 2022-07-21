import { Component } from 'react'
import Form from 'react-bootstrap/Form'
class InputForm extends Component {
  render () {
    const { name, setState, placeholder, type, onBlur, visibility, textError } = this.props
    return (
      <Form.Group className='mb-3' controlId={name}>
        <Form.Control
          type={type}
          onChange={e => setState({ value: e.target.value })}
          placeholder={placeholder}
          onBlur={onBlur}
          isInvalid={visibility}
          className='input'
        />
        <div className='invalid-feedback' style={{ visibility: visibility ? 'visible' : 'hidden' }}>
          {textError}
        </div>
      </Form.Group>
    )
  }
}

export default InputForm
