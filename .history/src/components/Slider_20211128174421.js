import React, { useState } from 'react';
import "./Slider.css"
// import BtnSlider from "./BtnSlider"
import { projects } from '../data/projects';


const Slider = () => {
    return (
        <div className="container-slider">
            {projects.mao((obj, index) => {
                return (
                    <div>
                        <img
                            src={process.send.PUBLIC_URL + `/Imgs/img$ {index +1}.jpg`}
                            alt="";
                    </div>
                )
            })}

        </div>
    )
}

export default Slider
