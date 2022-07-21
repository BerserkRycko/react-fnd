import { Component } from 'react'
import Facebook from '../../../assets/social/Facebook.png'
import Instagram from '../../../assets/social/Instagram.png'
import WhatsApp from '../../../assets/social/WhatsApp.png'
import PayContact from '../../../assets/pay/PayContact.png'
class Contact extends Component {
  render () {
    return (
      <div className='col'>
        <p className='label-contact'>Contacto</p>
        <ul className='nav flex-column'>
          <li className='nav-item mb-2'>hola@foodin.com</li>
          <li className='nav-item mb-2'>(55) 1105 0770</li>
        </ul>
        <div className='div-social-img'>
          <img alt='facebook' className='img-social' src={Facebook} />
          <img alt='instagram' className='img-social' src={Instagram} />
          <img alt='whatsapp' className='img-social' src={WhatsApp} />
        </div>
        <div className='div-social-img'>
          <img alt='paycontact' className='payContact-img' src={PayContact} />
        </div>
      </div>
    )
  }
}

export default Contact
