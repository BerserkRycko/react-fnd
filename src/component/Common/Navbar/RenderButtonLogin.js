import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
class RenderButtonLogin extends Component {
  render () {
    return (
      <Form className='d-flex'>
        <Nav>
          <Nav.Link href='/login'>Ingresar</Nav.Link>
        </Nav>
        <Button variant='outline-success' href='/register'>¡Empieza ya!</Button>
      </Form>
    )
  }
}

export default RenderButtonLogin
