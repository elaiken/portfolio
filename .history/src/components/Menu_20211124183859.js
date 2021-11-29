import { Link } from "react-router-dom"
import { BiMenuAltRight } from "react-icons/bi"




const Menu = () => {
    return (
        <>
            <div className="menu-btn">
                <button>
                    <BiMenuAltRight />
                </button>
            </div>


            <header className="header">
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
