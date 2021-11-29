import { useState } from "react";
import { projects } from "../data/projects";




const Projects = () => {
    const [cards, setCards] = useState(projects)
    return (
        <>
            <div className="projects">
                <h1>Projects Page</h1>
                <div className="cards">
                    {cards.map(({ id, title, desc, github, demo, imgae }) => (
                        <article key={id}>
                            <img src="" alt="" />
                        </article>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects
