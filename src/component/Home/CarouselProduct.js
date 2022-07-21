import { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../../scss/CarouselProduct.scss'

class CarouselProduct extends Component {
  render () {
    const { productos } = this.props
    return (
      <div>
        <Carousel className='divCarousel'>
          {productos.map(item => (
            <Carousel.Item key={item.name}>
              <img
                className='d-block w-100'
                src={item.src}
                alt={item.name}
              />
              <Carousel.Caption>
                <h3 className='titleCarousel'>{item.title}</h3>
                <p className='descripcionCarousel'>{item.descripcion}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default CarouselProduct
