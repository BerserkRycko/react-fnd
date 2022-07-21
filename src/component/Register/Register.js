import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import InputForm from '../InputForm'
import Button from '../Button'
import Card from 'react-bootstrap/Card'
import '../../scss/Login.scss'
class RegisterComponent extends Component {
  render () {
    return (
      <Card className='card-login'>
        <Card.Body>
          <p className='title-card'>Regístrate</p>
          <p className='subtitle-card'>Crea tu cuenta a continuación</p>
          <Form>
            <InputForm
              name='name'
              placeholder='Nombre (s)*'
              type='text'
              setState=''
            />
            <InputForm
              name='ap'
              placeholder='Apellido paterno*'
              type='text'
              setState=''
            />
            <InputForm
              name='am'
              placeholder='Apellido materno*'
              type='text'
              setState=''
            />
            <InputForm
              name='email'
              placeholder='Correo electronico*'
              type='text'
              setState=''
            />
            <InputForm
              name='tel'
              placeholder='Teléfono*'
              type='text'
              setState=''
            />
            <InputForm
              name='fn'
              placeholder='Fecha de nacimiento'
              type='text'
              setState=''
            />
            <div className='mb-3 form-check'>
              <input type='checkbox' className='form-check-input' />
              <p className='form-check-label label-footer-card'>
                Al registrarte en Foodin, acepta los Términos y Condiciones. <label className='label-green-card'>Ve nuestra  Políticas de Privacidad</label>
              </p>
            </div>
            <Button className='button-Green'>
              Regístrame
            </Button>
            <div className='mb-3 row'>
              <label className='col-sm-7 col-form-label'>¿Ya tienes una cuenta? </label>
              <div className='col-sm-4'>
                <a href='/' className='col-form-label label-card'>Regístrate</a>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

export default RegisterComponent
