import { FaGithub } from "react-icons/fa"



const Home = () => {

    return (
        <div className="home">
            <div className='overlay'>

                <h1> Elliott Aiken </h1>
                <p> Front-End Developer</p>

                <ul>
                    <li>
                        <a href="https://github.com/elaiken"><FaGithub /></a>

                    </li>
                </ul>

            </div>


        </div>

    )
}

export default Home
