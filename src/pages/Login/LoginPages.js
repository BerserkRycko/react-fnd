import { Component } from 'react'
import Login from '../../component/Login/Login'
import ImgLogin from '../../component/Login/ImgLogin'
class LoginPages extends Component {
  render () {
    return (
      <div className='container py-4'>
        <div className='row align-items-md-stretch'>
          <div className='col'>
            <Login />
          </div>
          <div className='col'>
            <ImgLogin />
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPages
