import { Component } from 'react'
import defaulImagen from '../../../assets/defaultImg.png'
import '../../../scss/RenderUserLogin.scss'

class RenderUserLogin extends Component {
  render () {
    const { user } = this.props
    return (
      <div className='div-container'>
        <img
          className='defaultImg'
          alt='defaulImagen'
          src={defaulImagen}
        />
        <div className='row-img-text-container'>
          <div>
            <p>Hola  👋</p>
          </div>
          <div className='div-title-user'>
            <p className='title-user'>{user.name} {user.lastName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RenderUserLogin
