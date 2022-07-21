import React from 'react'

function Plans ({ img, title, price, recommended, details, button, link }) {
  return (
    <div className='plan'>
      <div className='header-plans'>
        <div className='contents'>
          <div className='header-plan'>
            <div className='group-image-text'>
              <div className='image-header-plan'>
                <img src={img} alt='muestra' />
              </div>
              <div className='wrap-description'>
                <p className='recommended'>{recommended}</p>
                <p className='title-plan'>
                  {title}
                </p>
                <p className='price-plan'>
                  {price}
                </p>
              </div>
            </div>

          </div>
          <div className='rectangle-header'> </div>
        </div>
      </div>
      <div className='body-text'>
        <ul>
          {details}
        </ul>
      </div>
      <div className='footer-plans'>
        <button className='button-plan'>{button}</button>
        <div className='link-plan'>
          <p className='link-text'>{link}</p>
        </div>
      </div>
    </div>
  )
}

export default Plans
