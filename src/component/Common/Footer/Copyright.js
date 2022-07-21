import { Component } from 'react'

class Copyright extends Component {
  render () {
    return (
      <div className='col-12'>
        <div className='d-flex justify-content-between border-top div-footer-copyright'>
          <a href='/' className='label-copyright'>Copyright 2022 Foodin, All rights reserved</a>
          <a href='/termsandconditions' className='label-term'>Terminos y condiciones de uso | Políticas de Privacidad</a>
        </div>
      </div>
    )
  }
}

export default Copyright
