import React from 'react'
import Plans from '../../component/Plans/Plans'
import '../../scss/Plans.scss'
import img1 from '../../assets/Plan/Rectangle 2673.png'
import img2 from '../../assets/Plan/Rectangle 2674.png'
import img3 from '../../assets/Plan/Rectangle 2675.png'

const lists = { muestra1: <li>Pedido mínimo de 2 platillos.</li>, muestra2: <><li>Mejores precios y beneficios.</li><li>Renovaciones semanales automáticas.</li><li>Sin costo de envío.</li><li>Flexibilidad de planear o pausar tus siguientes semanas.</li></>, muestra3: <><li>Posibilidad de elegir las comidas de la semana.</li><li>Incremento de beneficios para los colaboradores.</li><li>Beneficios fiscales.</li></> }

function PlansPage () {
  return (
    <div className='containerPlans'>
      <><Plans img={img1} title='Día siguiente' precio='$100 MXN C/U' detalles={lists.muestra1} textoBoton='¡Comprar!' textoEnlace='Texto de enlace' />
        <Plans img={img2} recomendacion='recomendacion' title='Suscripción semanal' precio='Desde $85 MXN C/U' detalles={lists.muestra3} textoBoton='¡Comprar!' textoEnlace='Texto de enlace' />
        <Plans img={img3} title='Empresas' detalles={lists.muestra1} textoBoton='¡Comprar!' textoEnlace='Texto de enlace' />
      </>
    </div>
  )
}

export default PlansPage
