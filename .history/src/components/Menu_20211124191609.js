import { useState } from "react"

import { Link } from "react-router-dom"

import { BiMenuAltRight } from "react-icons/bi"




const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>


            <div className="menu-btn">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <BiMenuAltRight />
                </button>

                <header className="">
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HomePage</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact-me">Contacts</Link>
                    </li>
                </ul>
            </nav>

        </header>

        </>
    )
}

export default Menu
