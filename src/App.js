import { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Common/Navbar'
import Footer from './component/Common/Footer'
import HomeRoutes from './routes/Home/HomeRouter'
import LoginRouter from './routes/Login/LoginRouter'
import RegisterRouter from './routes/Register/RegisterRouter'
import TermsAndConditionsRouter from './routes/TermsAndConditions/TermsAndConditionsRouter'
import { Example } from './constant/index'

class App extends Component {
  render () {
    const user = Example.exampleUser // estos son datos hardcodedos para el uso de muestras
    return (
      <div className='container'>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<HomeRoutes user={user} />} />
          <Route path='/login' element={<LoginRouter />} />
          <Route path='/register' element={<RegisterRouter />} />
          <Route path='/termsandconditions' element={<TermsAndConditionsRouter />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    )
  }
}

export default App
