import { useState } from "react";
import { FaGithub, FaVideo } from "react-icons/fa";
import { projects } from "../data/projects";




const Projects = () => {
    //eslint-disable-next-line
    const [cards, setCards] = useState(projects)
    return (
        <>
            <div className="projects">
                <h1>Projects Page</h1>
                <div className="cards">
                    {cards.map(({ id, title, desc, github, demo, image }) => (
                        <article key={id}>
                            <img src={image} alt={title} />
                            <h4>{title}</h4>
                            <p>{desc}</p>
                            <ul>
                                <l1><a href={github} target="_blank" rel="noopener noreferrer" className="github"><FaGithub style={{ marginRight: 5 }} />GitHub</a></l1>
                                <l1><a href={demo} target="_blank" rel="noopener noreferrer" className="demo" ><FaVideo style={{ marginRight: 5 }} />Demo</a></l1>
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects
