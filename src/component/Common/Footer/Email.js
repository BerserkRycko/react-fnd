import { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
class Email extends Component {
  render () {
    return (
      <div className='col'>
        <form>
          <h5 className='label-contact'>¡Dejanos tu correo!</h5>
          <p className='ofert-label'>Recibe las ofertas especiales y las noticias</p>
          <div className='d-flex w-100 gap-2'>
            <InputGroup className='mb-3'>
              <Form.Control
                placeholder='Tu correo electrónico'
                aria-label='Tu correo electrónico'
                aria-describedby='basic-addon2'
              />
              <InputGroup.Text id='basic-addon2'>Enviar</InputGroup.Text>
            </InputGroup>
          </div>
          <div className='mb-3 row'>
            <label className='col-sm-7 col-form-label'>¿Ya tienes cuenta?</label>
            <div className='col-sm-4'>
              <a href='/' className='col-form-label label-card'>Ingresa aquí</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Email
