import { Component } from 'react'
import HomeBanner from '../../component/Home/HomeBanner'
import { Example } from '../../constant/index'
import CarouselProduct from '../../component/Home/CarouselProduct'
import Plans from '../../component/Home/Plans'
import '../../scss/Plans.scss'
import img1 from '../../assets/plans/Rectangle 2673.png'
import img2 from '../../assets/plans/Rectangle 2674.png'
import img3 from '../../assets/plans/Rectangle 2675.png'
import logo from '../../assets/Foodin.png'

const lists = {
  listDetail1: <li>Pedido mínimo de 2 platillos.</li>,
  listDetail2: <><li>Mejores precios y beneficios.</li><li>Renovaciones semanales automáticas.</li><li>Sin costo de envío.</li><li>Flexibilidad de planear o pausar tus siguientes semanas.</li></>,
  listDetail3: <><li>Posibilidad de elegir las comidas de la semana.</li><li>Incremento de beneficios para los colaboradores.</li><li>Beneficios fiscales.</li></>
}

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { user } = this.props
    const { productos } = Example // estos son datos hardcodedos para el uso de muestras
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 col-lg-12'>
            <HomeBanner user={user} />
          </div>
          <div className='col-md-5 col-lg-12'>
            <CarouselProduct productos={productos} />
          </div>
          <div className='section-plans'>
            <img src={logo} alt='Foodin' />
            <h2>¿Que planes tenemos?</h2>
            <p className='subtitle-plan'>Descubre los diferentes beneficios de cada plan</p>
            <div className='container-plans'>
              <><Plans img={img1} title='Día siguiente' price='$100 MXN C/U' details={lists.listDetail1} button='¡Comprar!' link='Texto de enlace' />
                <Plans img={img2} recommended='recomendacion' title='Suscripción semanal' price='Desde $85 MXN C/U' details={lists.listDetail2} button='¡Comprar!' link='Texto de enlace' />
                <Plans img={img3} title='Empresas' details={lists.listDetail3} button='¡Comprar!' link='Texto de enlace' />
              </>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
