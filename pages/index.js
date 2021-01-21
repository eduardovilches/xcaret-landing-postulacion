import Navbar from './general/navbar'
import Carousel from './general/carousel.js'
import Footer from './general/footer.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faHome,
    faClock,
    faHeart,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faQuestionCircle,
    faCalendar,
    faBus,
    faUtensils,
    faCamera,
    faEnvelope,
    faEnvelopeOpen,
    faMobile,
    faMobileAlt
} from '@fortawesome/fontawesome-free-solid'
import {
    faApple,
    faCcAmex,
    faCcMastercard,
    faCcPaypal,
    faCcVisa,
    faGooglePay,
    faGooglePlay
} from '@fortawesome/free-brands-svg-icons'
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import reducers from './reducers';
import Form from './components/Form';

export default function Home({list, listItems}) {

    return (
        <div>
            <Provider store={createStore(reducers)}>
                <Navbar/>
                <div
                    className="container bg-third-color text-white p-4 text-center md:hidden lg:hidden xl:hidden">
                    Admisión Parque Xcaret
                </div>
                <Carousel/>
                <div className="container mx-auto">
                    <div className="mx-auto">
                        <div className="flex flex-col md:flex-row justify-center">
                            <div
                                className="md:w-1/2 max-w-md flex flex-col justify-center  hidden md:block lg:block xl:block">

                                <div className="text-sm mt-4"><FontAwesomeIcon icon={faHome}/>
                                    Home /
                                    <a href="">Admisiones</a>
                                </div>
                                <div className="text-xl font-bold mt-4">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: list.text_out
                                        }}></div>
                                </div>
                                <div className="text-base mt-4">
                                    <p>Entrada Xcaret Parque</p>
                                </div>
                                <div className="text-base mt-4 mb-4 text-gray-400">
                                    <p>
                                        <a href="">Entrada Xcaret Parque</a>,
                                        <a className="line-through" href="">prueba prueba</a>
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <ul>
                                        <li><FontAwesomeIcon icon={faClock}/>
                                            Duración: {list.time}</li>
                                        <li><FontAwesomeIcon icon={faHeart}/>
                                            Categoría: {list.type}</li>
                                        <li><FontAwesomeIcon icon={faClock}/>
                                            Horario: {list.time}</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="bg-white">
                                        <nav className="tabs flex flex-col sm:flex-row">
                                            <button data-target="panel-1" className="tab active text-gray-600">
                                                Primer Tab
                                            </button>
                                            <button data-target="panel-2" className="tab ext-gray-600 ">
                                                Segundo Tab
                                            </button>
                                            <button data-target="panel-3" className="tab text-gray-600">
                                                Tercer Tab
                                            </button>
                                        </nav>
                                    </div>

                                    <div id="panels">
                                        <div className="panel-1 tab-content active py-5">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: listItems.text_out
                                                }}></div>
                                        </div>
                                        <div className="panel-2 tab-content py-5">
                                            Map here
                                        </div>
                                        <div className="panel-3 tab-content py-5">
                                            other info
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="w-4/12 border-2 border-light-blue-500	mt-10 left-10 bg-white rounded-full  h-12 w-12 text-sm text-gray-600	 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
                                        <span className="block"><FontAwesomeIcon icon={faAngleDoubleLeft}/>
                                            Xcaret Total</span>
                                    </button>
                                    <button
                                        className="w-4/12  float-right border-2 border-light-blue-500	mt-10  bg-white rounded-full  h-12 w-12 text-sm text-gray-600	 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
                                        <span className="block">Xcaret Plus
                                            <FontAwesomeIcon icon={faAngleDoubleRight}/>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="md:hidden lg:hidden xl:hidden">
                                <div className="bg-third-color">
                                    <nav className="tabs flex flex-wrap">
                                        <button data-target="panel-1" className="tab-item  active text-xs text-white">
                                            COMPRA TU ATRACCIÓN
                                        </button>
                                        <button data-target="panel-2" className="tab-item  text-xs text-white">
                                            ATRACCIONES
                                        </button>
                                        <button data-target="panel-3" className="tab-item text-xs text-white">
                                            GASTRONOMÍA
                                        </button>
                                        <button data-target="panel-3" className="tab-item text-xs text-white">
                                            COMO LLEGAR
                                        </button>
                                    </nav>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-3 flex justify-start md:justify-end w-full md:w-1/2">
                                <Form/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="hidden md:block lg:block xl:block">
                        <div className="sm:grid sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
                            <div className="flex flex-col justify-center px-4 py-4 bg-white">
                                <div>
                                    <img src="https://via.placeholder.com/412X243"/>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center px-4 py-4 mt-4 bg-white">
                                <div>
                                    <img src="https://via.placeholder.com/412X243"/>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center px-4 py-4 mt-4 bg-white">
                                <div>
                                    <img src="https://via.placeholder.com/412X243"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden lg:hidden xl:hidden">
                        <div className="bg-third-color">
                            <nav className="tabs flex flex-wrap">
                                <button data-target="panel-1" className="tab-item  active text-xs text-white">
                                    ¿QUE ES XCARET?
                                </button>
                                <button data-target="panel-2" className="tab-item  text-xs text-white">
                                    INCLUYE
                                </button>
                                <button data-target="panel-3" className="tab-item text-xs text-white">
                                    RECOMENDACIONES
                                </button>
                                <button data-target="panel-3" className="tab-item text-xs text-white">
                                    LOREP IMPSUM
                                </button>
                            </nav>
                        </div>
                        <div id="panels">
                            <div className="panel-1 tab-content active p-2">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: list.text_out
                                    }}></div>
                                <div
                                    className="font-bold mt-2"
                                    dangerouslySetInnerHTML={{
                                        __html: list.text_out
                                    }}></div>
                                <div className="flex flex-row mt-2">
                                    <div className="w-5/12 ml-3 mr-5">
                                        <img className="rounded" src="https://via.placeholder.com/150x250"/>
                                    </div>
                                    <div className="w-5/12">
                                        <img className="rounded" src="https://via.placeholder.com/150x250"/>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-2 tab-content py-5">
                                Map here
                            </div>
                            <div className="panel-3 tab-content py-5">
                                other info
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden lg:hidden xl:hidden">
                        <div className="text-base font-bold text-center mt-4">
                            <p>Hasta 12 meses sin intereses</p>
                        </div>
                        <div>
                            <p className="text-center">
                                <FontAwesomeIcon className="mr-5" icon={faCcAmex}/>
                                <FontAwesomeIcon className="mr-5" icon={faCcMastercard}/>
                                <FontAwesomeIcon className="mr-5" icon={faCcVisa}/>
                                <FontAwesomeIcon className="mr-5" icon={faCcPaypal}/>
                            </p>
                        </div>
                        <div className="text-base text-left mt-4 px-4">
                            <p>Con los principales bancos y tarjetas emitidas en México</p>
                            <p>*No aplica Paypal
                                <b>Más opciones
                                    <FontAwesomeIcon className="mr-5" icon={faAngleDoubleRight}/></b>
                            </p>
                        </div>
                        <div className="border p-2 m-2">
                            <p className="text-center text-5xl"><FontAwesomeIcon className="mr-5" icon={faEnvelopeOpen}/></p>
                            <p>
                                Recibe promociones y noticias de Xcaret
                                <br/>
                                para disfrutar en tus próximas
                                <br/>
                                vacaciones
                            </p>
                            <button className="w-full bg-black text-white rounded-full p-2 mt-2">
                                SUSCRIBIRME
                            </button>
                        </div>
                        <div className="border p-2 m-2">
                            <div className="flex flex-row mt-2">
                                <div className="w-2/12 ml-3 mr-5">
                                    <p className="text-center text-5xl"><FontAwesomeIcon className="mr-5" icon={faMobileAlt}/></p>
                                </div>
                                <div className="w-6/12 ml-3 mr-5">
                                    <p>
                                        Descarga gratis nuestra app y
                                        <br/>
                                        disfruta de una experiencia
                                        <br/>
                                        única en tu visita
                                    </p>
                                    <p className="w-full bg-black text-white rounded p-2 mt-2">
                                        <span className="w-2/12"><FontAwesomeIcon className="text-5xl" icon={faGooglePlay}/></span>
                                        <span className="w-2/12">Disponible en Google Play</span>
                                    </p>
                                    <p className="w-full bg-black text-white rounded p-2 mt-2">
                                        <span className="w-2/12"><FontAwesomeIcon className="text-5xl" icon={faApple}/></span>
                                        <span className="w-2/12">Disponible en App Store</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </Provider>
        </div>
    )
}
export async function getStaticProps() {

    const res = await fetch('http://www.randomtext.me/api/lorem/h1/5')
    const list = await res.json()

    const reqItem = await fetch('http://www.randomtext.me/api/lorem/ul-5/5-15')
    const listItems = await reqItem.json()

    return {
        props: {
            list,
            listItems
        }
    }
}
