import { Component } from 'react'
import LogoComponent from './Logo'
import Contact from './Footer/Contact'
import Email from './Footer/Email'
import ListRout from './Footer/ListRout'
import Copyright from './Footer/Copyright'
import '../../scss/Footer.scss'
class Footer extends Component {
  render () {
    return (
      <footer>
        <div className='div-logo'>
          <LogoComponent />
        </div>
        <hr className='col-3 col-md-12 mb-5 div-hr' />
        <div className='container'>
          <div className='row'>
            <ListRout />
            <Contact />
            <Email />
          </div>
        </div>
        <Copyright />
      </footer>
    )
  }
}

export default Footer
