import React from 'react'
import './Slider.css'
import leftArrow from './icons/left-arrow.svg'
import rigthArrow from './icons/right-arrow.svg'

const BtnSlider = () => {
    return (
        <button
            className="btn-slide ">
            <img src={rigthArrow}
                alt="" />
        </button>
    )
}

export default BtnSlider
