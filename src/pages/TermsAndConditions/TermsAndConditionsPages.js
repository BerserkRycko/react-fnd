import React from 'react'
import { TermsAndConditions, Policies } from '../../component/TermsAndConditions/TermsAndConditions'
import '../../scss/Tyc.modules.scss'
const Adorno = '../../img/Adorno.png'

class TermsAndConditionsPages extends React.Component {
  render () {
    return (
      <div className='wrap-tyc'>
        <div className='container-tyc'>
          <div className='col-md-12 text-center img-tyc'>
            <img src={Adorno} className='img-responsive' alt='Terminos y condiciones' />
          </div>
          <div>
            <h2 className='text-center'>
              Términos y condiciones
            </h2>
          </div>
          <div>
            <TermsAndConditions />
          </div>
          <div className='col-md-12 text-center img-tyc'>
            <img src={Adorno} className='img-responsive' alt='Terminos y condiciones' />
          </div>
          <div>
            <h2 className='text-center'>
              Política de datos
            </h2>
          </div>
          <div>
            <Policies />
          </div>
        </div>
      </div>
    )
  };
}

export default TermsAndConditionsPages
