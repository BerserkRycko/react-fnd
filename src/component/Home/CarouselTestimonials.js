import React from 'react'

function Testimonials (props) {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='container-testimonial'>
          <img className='image-testimonial' src={props.image} alt='imagen' />
          <div className='container-text-testimonial'>
            <p className='name-testimonial'><b>{props.name}</b> </p>
            <p className='date-testimonial'>{props.date}</p>
            <p className='testimonial'>"{props.testimonial}"</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
