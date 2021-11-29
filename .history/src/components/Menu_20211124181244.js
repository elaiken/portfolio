import { BiMenuAltRight } from "react-icons/bi"
import { Link } from "react-router-dom"




const Menu = () => {
    return (
        <header>
            <div className="menu-btn">
                <button>
                    <BiMenuAltRight />
                </button>
            </div>
            <nav>
                <ul></ul>
                <li>
                    <Link to="/">HomePage</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact-me">Contacts</Link>
                </li>
            </nav>

        </header>
    )
}

export default Menu
