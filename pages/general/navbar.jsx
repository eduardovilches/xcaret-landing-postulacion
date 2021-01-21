import React, {PureComponent} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faQuestionCircle, faPhone, faUserAlt, faCaretDown, faUser, faCar, faGlobe } from '@fortawesome/fontawesome-free-solid'
import {connect} from 'react-redux';

class Navbar extends PureComponent{

  render(){
    return(
        <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0  md:pb-4 bg-primary">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <h1 className="leading-none text-2xl text-grey-darkest">
              <a>
                <img className="block  h-8 w-auto" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" />
              </a>
            </h1>
            <div className="md:hidden lg:hidden xl:hidden">
              <a className="primary-menu-item" href=""><FontAwesomeIcon icon={ faUser }/></a>
              <a className="primary-menu-item" href=""><FontAwesomeIcon icon={ faPhone }/></a>
              <a className="primary-menu-item" href=""><FontAwesomeIcon icon={ faShoppingCart }/></a>
              <a className="primary-menu-item" href=""><FontAwesomeIcon icon={ faGlobe }/></a>
            </div>
          </div>
                
          <nav className="hidden md:block lg:block xl:block">
            <ul className="list-reset md:flex md:items-center menu-list mb-3">
              <li className="md:ml-4">
              <form className="relative">
                <svg width="20" height="20" fill="currentColor" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                <input className="rounded-full" type="text"/>
              </form>
              </li>
              <li className="md:ml-4">
                <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                <FontAwesomeIcon icon={ faQuestionCircle }/> Preguntas frecuentes
                </a>
              </li>
              <li className="md:ml-4">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                <FontAwesomeIcon icon={ faPhone }/> Atención a clientes
                </a>
              </li>
              <li className="md:ml-4">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                <FontAwesomeIcon icon={ faUserAlt }/> Tu cuenta
                </a>
              </li>
              <li className="md:ml-4">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                  USD <FontAwesomeIcon icon={ faCaretDown }/>
                </a>
              </li>
              <li className="md:ml-4">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                  ES <FontAwesomeIcon icon={ faCaretDown }/>
                </a>
              </li>
            </ul>
            <ul className="list-reset md:flex md:items-center menu-list">
              <li className="md:ml-4">
                <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                  PARQUES
                </a>
              </li>
              <li className="md:ml-4">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                  TOURS
                </a>
              </li>
              <li className="md:ml-4">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                  ACTIVIDADES
                </a>
              </li>
              <li className="md:ml-4">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                  HOTEL XCARET
                </a>
              </li>
              <li className="md:ml-4">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                  PROMOCIONES Y DESCUENTOS
                </a>
              </li>
              <li className="md:ml-4">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                  CARRITO <FontAwesomeIcon icon={ faShoppingCart }/> {this.props.count}
                </a>
              </li>
            </ul>
          </nav>
        </header>
    )
  }
}
function mapStateToProps(state) {
  return {
    count: state.counter.count,
  }
}

export default connect(mapStateToProps)(Navbar);

