import { Component } from 'react'

class ListRout extends Component {
  render () {
    return (
      <div className='col'>
        <ul className='nav flex-column'>
          <li className='nav-item mb-2'><a href='/' className='nav-link p-0 text-muted label-list'>Nuestros planes</a></li>
          <li className='nav-item mb-2'><a href='/' className='nav-link p-0 text-muted label-list'>Nuestro menu</a></li>
          <li className='nav-item mb-2'><a href='/' className='nav-link p-0 text-muted label-list'>Como funciona</a></li>
          <li className='nav-item mb-2'><a href='/' className='nav-link p-0 text-muted label-list'>Sobre nosotros</a></li>
        </ul>
      </div>
    )
  }
}

export default ListRout
