/* eslint-disable react/jsx-no-duplicate-props */
import { Component } from 'react'
import BannerHome from '../../assets/bannerHome.png'
import Button from '../Button'
import '../../scss/HomeBanner.scss'

class HomeBanner extends Component {
  render () {
    const { user } = this.props
    return (
      <section className='py-5 container container-banner'>
        <div className='row py-lg-5 align-items-end'>
          <div className='col-lg-6 col-md-8'>
            {
              user && (
                <h1 className='text-green'>¡Bienvenido {user.name} {user.lastName}!</h1>
              )
            }
            <div style={{ paddingTop: '35px', paddingBottom: '40px' }}>
              <p className='text-black'>
                ¿Qué esperas para tener una comida
              </p> <p className='text-green'>fresca, deliciosa y saludable</p>
              <p className='text-black'>todos los días?</p>
            </div>
            <p className='text-footer'>
              Tenemos los mejores platillos esperando por tu orden.
            </p>
            <p>
              <Button className='button-Green'>
                Comenzar
              </Button>
            </p>
          </div>
          <div className='col-lg-6 col-md-4 mx-auto'>
            <img className='banner-img' alt='banner' src={BannerHome} />
          </div>
        </div>
        <svg
          class='waves' xmlns='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28' preserveAspectRatio='none' shape-rendering='auto'
        >
          <defs>
            <path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
          </defs>
          <g class='parallax'>
            <use href='#gentle-wave' x='48' y='7' fill='#fff' />
          </g>
        </svg>
      </section>
    )
  }
}

export default HomeBanner
