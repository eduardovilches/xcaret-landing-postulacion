import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {increaseCount, decreaseCount, resetCount, increaseTotal} from '../actions/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {

    faQuestionCircle,
    faCalendar,
    faBus,
    faUtensils,
    faCamera,
} from '@fortawesome/fontawesome-free-solid'


class Form extends PureComponent {
    render() {
        return (
            <div
                className="mb-4 p-3 bg-blue-form lg:bg-white md:bg-white xl:bg-white rounded">
                <div className="text-xl p-4 text-gray-600 text-center font-bold mt-4 mb-4">
                    <p>HASTA 12 MESES<br/>SIN INTERESES
                        <FontAwesomeIcon icon={faQuestionCircle}/></p>
                </div>
                <div
                    className="container mb-3 bg-third-color text-white p-4 text-center hidden md:block lg:block xl:block">
                    ENTRADA XCARET PARQUE
                </div>
                <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0 w-2/4 float-left">
                        <label className="block mb-2 text-sm text-center font-bold text-gray-700">
                            Adultos
                            <br/>
                            $93.49 USD
                        </label>
                        <input onChange={calculateTotal}
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
                            id="adults"
                            type="number"
                            placeholder="Adultos (12+ Años)"/>
                    </div>
                    <div className="md:ml-2 w-2/4 float-left">
                        <label className="block mb-2 text-sm text-center font-bold text-gray-700">
                            Niños
                            <br/>
                            $46.75 USD
                        </label>
                        <input onChange={calculateTotal}
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded  appearance-none focus:outline-none focus:shadow-outline"
                            id="kids"
                            type="number"
                            placeholder="Niños (5-11 Años)"/>
                    </div>
                </div>
                <div className="mb-4 relative">
                    <FontAwesomeIcon
                        className="absolute mt-3 right-2 icon-color-primary"
                        icon={faCalendar}/>
                    <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="visitDate"
                        type="text"
                        placeholder="Fecha de visita"/>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                    <div className="w-8/12 float-left mb-4 md:mr-2 md:mb-0 flex-auto">
                        <button
                            className="w-full border-2 border-light-blue-500 bg-white rounded-full p-2  h-12  text-sm text-gray-600	 hover:text-indigo-400 focus:text-indigo-400  focus:outline-none focus:shadow-outline">
                            Agregar
                            <FontAwesomeIcon className="ml-1 mr-1" icon={faBus}/>
                            transportación
                        </button>
                    </div>
                    <div className="float-left md:ml-2 flex-auto">
                        <button
                            className="border-2 border-light-blue-500 bg-white rounded-full p-2  h-12  text-sm text-gray-600	 hover:text-indigo-400 focus:text-indigo-400  focus:outline-none focus:shadow-outline">
                            Info
                        </button>
                    </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                    <div className="w-8/12 float-left mb-4 md:mr-2 md:mb-0 flex-auto">
                        <button
                            className="w-full border-2 border-light-blue-500 bg-white rounded-full p-2  h-12  text-sm text-gray-600	 hover:text-indigo-400 focus:text-indigo-400  focus:outline-none focus:shadow-outline">
                            Agregar 
                            <FontAwesomeIcon className="ml-1 mr-1" icon={faUtensils}/>
                            alimentos y bebidas
                        </button>
                    </div>
                    <div className="float-left md:ml-2 flex-auto">
                        <button
                            className="border-2 border-light-blue-500 bg-white rounded-full p-2  h-12  text-sm text-gray-600	 hover:text-indigo-400 focus:text-indigo-400  focus:outline-none focus:shadow-outline">
                            Info
                        </button>
                    </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                    <div className="w-8/12 float-left mb-4 md:mr-2 md:mb-0 flex-auto">
                        <button
                            className="w-full border-2 border-light-blue-500 bg-white rounded-full p-2  h-12  text-sm text-gray-600	 hover:text-indigo-400 focus:text-indigo-400  focus:outline-none focus:shadow-outline">
                            Agregar
                            <FontAwesomeIcon  className="ml-1 mr-1" icon={faCamera}/>
                            Fotopass
                        </button>
                    </div>
                    <div className="md:ml-2 float-left flex-auto">
                        <button
                            className="border-2 border-light-blue-500 bg-white rounded-full p-2  h-12  text-sm text-gray-600	 hover:text-indigo-400 focus:text-indigo-400  focus:outline-none focus:shadow-outline">
                            info
                        </button>
                    </div>
                </div>
                <div className="w-full float-left mb-6 text-center">
                    <div className="text-xl font-bold mt-4" >TOTAL: $<span id="totalPrice">0.00</span>USD</div>
                    <div className="text-xs mt-4">
                        <p>*Precios sujetos a cambios sin previo aviso. Aplican restricciones</p>
                    </div>
                </div>
                <div className="mb-6 text-center">
                    <button onClick={this.props.handleIncrease}
                        className="w-6/12 	mt-2 left-10 bg-red-500 rounded-full  h-10 text-sm text-white	 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
                        <span className="block">AGREGAR AL CARRITO</span>
                    </button>
                    <button
                        className="float-right w-6/12 mt-2  bg-red-500 rounded-full  h-10  text-sm text-white	 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
                        <span className="block">PAGAR</span>
                    </button>
                </div>
                <div className="text-center">
                    <a
                        className="inline-block border-2 rounded-full p-2 text-sm text-blue-500 align-baseline hover:text-blue-800"
                        href="#">
                        Ver descuentos y beneficios
                    </a>
                </div>
            </div>
        )
    }
}

function calculateTotal(e){
  let adultPrice = parseFloat('93.49').toFixed(2)
  let kidPrice = parseFloat('46.75').toFixed(2)

  let kids = document.getElementById("kids").value
  let totalKids = kids * kidPrice
  let adults = document.getElementById("adults").value
  let totalAdults = adults * adultPrice
  let results = totalAdults + totalKids
  document.getElementById("totalPrice").innerHTML = results
}

function mapStateToProps(state) {
    return {count: state.counter.count}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        handleIncrease: increaseCount,
        handleDecrease: decreaseCount,
        handleReset: resetCount,
        handleChangeTotal: increaseTotal
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);