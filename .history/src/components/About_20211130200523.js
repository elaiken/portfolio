import React from 'react'
import img from './avatar1.png'

const About = () => {
    return (
        <>
            <div className="about-me">
                <h1> About Me </h1>
                <div>
                    <img className="avatar"
                        src={img}
                        alt="" />

                </div>
                <p>
                    Elliott Aiken
                </p>
            </div>
        </>
    )
}

export default About
