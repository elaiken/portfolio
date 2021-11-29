import { BiMenuAltRight } from "react-icons/bi"




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
                    <Link to="/"></Link>
                </li>
                <li>
                    <Link></Link>
                </li>
                <li>
                    <Link></Link>
                </li>
            </nav>

        </header>
    )
}

export default Menu
