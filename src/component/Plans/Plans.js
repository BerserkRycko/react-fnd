import React from 'react'

function Plans (props) {
  return (
    <div className='plan'>
      <div className='headerPlans'>
        <div className='contents'>
          <div className='headerPlan'>
            <div className='groupImageText'>
              <div className='imageHeaderPlan'>
                <img src={props.img} alt='muestra' />
              </div>
              <div className='wrapDescription'>
                <p className='recommended'>{props.recomendacion}</p>
                <p className='titlePlan'>
                  {props.title}
                </p>
                <p className='pricePlan'>
                  {props.precio}
                </p>
              </div>
            </div>

          </div>
          <div className='rectangleHeader' />
        </div>
      </div>
      <div className='bodyText'>
        <ul>
          {props.detalles}
        </ul>
      </div>
      <div className='linkPlan'>
        <p className='linkText'>{props.textoEnlace}</p>
      </div>
      <button className='buttonPlan'>{props.textoBoton}</button>
    </div>
  )
}

export default Plans
