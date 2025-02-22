import { useState } from "react";
import "../App.css";
import dietCock from "../assets/DietCock.png";
import assembly from "../assets/Assembly-Endgame.png";
import tenzies from "../assets/Tenzies Game.png";
import chefClaude from "../assets/ChefClaude.png";
import meme from "../assets/MemeGenerator.png";
import travelJournal from "../assets/TravelJournal.png";
import staticPage from "../assets/Static-Page.png";
import blackJack from "../assets/BlackJack.png";
import leedsTracker from "../assets/LeedsTracker.png";
import PropTypes from "prop-types";

const projectData = [
    { title: "Diet Cock", image: dietCock, tags: ["MERN", "Full Stack", "React", "UI/UX"] },
    { title: "Assembly: Endgame", image: assembly, tags: ["Game Design", "React", "UI/UX"] },
    { title: "Tenzies", image: tenzies, tags: ["Game Design", "React", "UI/UX"] },
    { title: "Chef Claude", image: chefClaude, tags: ["Generative AI", "API", "React", "UI/UX"] },
    { title: "Meme Generator", image: meme, tags: ["API", "React", "UI/UX"] },
    { title: "Travel Journal", image: travelJournal, tags: ["React", "UI/UX"] },
    { title: "Black Jack in JavaScript", image: blackJack, tags: ["JavaScript", "Game Design", "UI/UX"] },
    { title: "Leeds Tracker Chrome Extension", image: leedsTracker, tags: ["JavaScript", "Extensions", "UI/UX"] },
    { title: "Static Pages", image: staticPage, tags: ["React", "UI/UX"] },
];

const ProjectItem = ({ index, title, image, tags }) => {
    const [isHovered, setIsHovered] = useState(false);

    console.log(image)

    return (
        <a
            href="#"
            className="project-list-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3 className="title-large">
                <span className="text-span-8">{index}</span> {title}
            </h3>
            <div className="discipline-tags">
                {tags.map((tag, index) => (
                    <div key={index} className="tag">
                        {tag}
                    </div>
                ))}
            </div>
            {isHovered && (
                <div className="hover-image-wrapper" style={{ opacity: 1 }}>
                    <img src={image} alt={`${title} Preview`} className="hover-image" style={{ opacity: 1 }} />
                </div>
            )}
        </a>
    );
};

ProjectItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Projects() {
    return (
        <section className="content-projects">
            <h4 id="case-studies" className="eyebrow">projects</h4>
            <div className="projects-container">
                {projectData.map((project, index) => (
                    <ProjectItem key={index} index={index + 1}{...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
