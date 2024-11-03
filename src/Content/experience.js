import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Image from "../assets/Image.png";

export const data = [
    {
        date: "2022-2023",
        title: "Title",
        link: "https://github.com/L343-C",
        contact: [
            {type: faGithub, link: "https://github.com/L343-C"},
            {type: faYoutube, link: "https://www.youtube.com/@abcdef8902s"}
        ],
        description: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        ],
        skills: [
            ["Reactjs", "TailwindCSS"]
        ],
        picture: Image
    },

    {
        date: "2023-2024",
        title: "Title2",
        link: "",
        contact: [
            {type: faGithub, link: "https://github.com/L343-C"},
            {type: faYoutube, link: "https://www.youtube.com/@abcdef8902s"}
        ],
        description: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ],
        skills: [
            ["Reactjs", "TailwindCSS"],
            ["MongoDB", "ExpressJS", "Nodejs"]
        ],
        picture: Image
    },

    {
        date: "2020-2022",
        title: "Title3",
        link: "",
        contact: [ 
            
        ],
        description: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        ],
        skills: [
            ["Reactjs", "TailwindCSS"],
            ["MongoDB", "ExpressJS", "Nodejs"]
        ],
        picture: Image
    }

]