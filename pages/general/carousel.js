import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid'

export default function Carousel(){
    return (
        <div className="flex flex-col items-center ">
            <div className="w-full bg-white rounded overflow-x-hidden flex snap-x h-80">
            <div className="snap-start slides w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0  relative" id="slide-1">
                <img src="https://via.placeholder.com/1350x320" className="h-full w-full"/>
            </div>
            <div className="snap-start slides w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0  relative" id="slide-2">
                <img src="https://via.placeholder.com/1350x320" className="h-full w-full object-cover absolute inset-0 z-10 opacity-25"/>
            </div>
            </div>
            <button className="absolute inset-y-1/5	mt-32 left-10 bg-gray-400	 rounded-full shadow-md h-12 w-12 text-2xl text-white hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
                <span className="block"><FontAwesomeIcon icon={ faAngleLeft }/></span>
            </button>
            <button  className="absolute inset-y-1/5 mt-32 right-10  bg-gray-400	 rounded-full shadow-md h-12 w-12 text-2xl text-white hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
                <span className="block"><FontAwesomeIcon icon={ faAngleRight }/></span>
            </button>
      </div>
    )
}