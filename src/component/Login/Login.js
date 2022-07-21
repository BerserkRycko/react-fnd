import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from '../Button'
import AuthApi from '../../store/actions/auth'
import InputForm from '../InputForm'
import Card from 'react-bootstrap/Card'
import '../../scss/Login.scss'

// eslint-disable-next-line prefer-regex-literals
const emailRegExp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)

function LoginComponente () {
  const [email, setEmail] = useState({
    value: '',
    hasError: false
  })
  const [password, setPassword] = useState({
    value: '',
    hasError: false
  })
  const handleSubmit = async e => {
    e.preventDefault()
    if (!email.hasError && !password.hasError) {
      const token = await AuthApi.Login({
        email: email.value,
        password: password.value
      })
      console.log('token', token)
    }
  }
  function handleBlur () {
    if (email.value.length > 4) {
      const hasError = !emailRegExp.test(email.value)
      setEmail((prevState) => ({ ...prevState, hasError }))
    }
  }
  function handleBlurPass () {
  }
  return (
    <Card className='card-login'>
      <Card.Body>
        <p className='title-card'>Bienvenido</p>
        <p className='subtitle-card'>Inicia sesión a continuación</p>
        <Form onSubmit={handleSubmit}>
          <InputForm
            name='Email'
            placeholder='Email / Usuario'
            type='email'
            setState={setEmail}
            onBlur={handleBlur}
            visibility={email.hasError}
            textError='Email no valido'
          />
          <InputForm
            name='Password'
            placeholder='Password'
            type='password'
            setState={setPassword}
            onBlur={handleBlurPass}
            visibility={password.hasError}
            textError='Contraseña no valida'
          />
          <Button className='button-Green' type='submit'>
            Acceder
          </Button>
          <div className='mb-3 row'>
            <label className='col-sm-7 col-form-label'>¿Olvidaste tu contraseña?</label>
            <div className='col-sm-4'>
              <a href='/' className='col-form-label label-card'>Recuperar</a>
            </div>
          </div>
          <div className='mb-3 row'>
            <label className='col-sm-7 col-form-label'>¿No tienes cuenta?</label>
            <div className='col-sm-4'>
              <a href='/' className='col-form-label label-card'>Regístrate</a>
            </div>
          </div>
          <p className='form-label  label-footer-card'>Si tienes alguna consulta comunícate con Foodin a través del
            correo electrónico <label className='label-green-card'>hello@foodin.com.mx.</label>
          </p>
          <p className='label-footer-card'>
            Consulta nuestro  <label className='label-green-card'>Aviso de Privacidad  y Términos y Condiciones</label>
          </p>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default LoginComponente
