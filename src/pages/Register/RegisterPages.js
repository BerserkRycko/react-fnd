import { Component } from 'react'
import RegisterComponent from '../../component/Register/Register'
import ImgLogin from '../../component/Login/ImgLogin'
class RegisterPages extends Component {
  render () {
    return (
      <div className='container py-4'>
        <div className='row align-items-md-stretch'>
          <div className='col'>
            <RegisterComponent />
          </div>
          <div className='col'>
            <ImgLogin />
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterPages
