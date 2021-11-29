import { v4 as uuidv4 } from "uuid"


export const projects = [
    {
        id: uuidv4(),
        title: "Airbnb Clone",
        desc: "Responsive clone of the Airbnb website with multiple pages made with React.js ",
        github: "https://github.com/elaiken/airbnb",
        demo: "https://airbnb-clone-2d99e.web.app/",
        image: "./images/Airbnb Logo.png",
    },
    {
        id: uuidv4(),
        title: "Amazon Clone ",
        desc: " Responsive clone of the Amazon website, with multiple pages made with React.js",
        github: "https://github.com/elaiken/amazon-clone",
        demo: "https://clone-606e9.web.app/",
        image: "./images/amazon.png",
    },
    {
        id: uuidv4(),
        title: "Hulu Clone ",
        desc: " Responsive clone of Hulu with use of Api fetches, made with React.js & Tailwind ",
        github: "https://github.com/elaiken/hulu-yt-clone",
        demo: "",
        image: "./images/Hulu-Logo.jpeg",
    },

]