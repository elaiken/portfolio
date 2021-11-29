import React from 'react'
import './Slider.css'
import { FaArrowLeft } from 'react-icons/fa'



const BtnSlider = () => {
    return (
        <button
            className="btn-slide ">
            <img src={FaArrowLeft}
                alt="" />
        </button>
    )
}

export default BtnSlider
