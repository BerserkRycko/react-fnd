import { Component } from 'react'
import Group from '../../assets/Group.png'
import '../../scss/Login.scss'

class ImgLogin extends Component {
  render () {
    return (
      <div className='div-img-login'>
        <img alt='imgLogin' className='img-login' src={Group} />
      </div>
    )
  }
}

export default ImgLogin
