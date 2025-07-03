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
import academeet from "../assets/Academeet.jpg";
import condoFlow from "../assets/CondoFlow.png";
import agos from "../assets/AGOS.png";
import PropTypes from "prop-types";

const projectData = [
	{ title: "Diet Cock", image: dietCock, tags: ["MERN", "Full Stack", "React", "UI/UX"], link: "https://github.com/icyclestick/12STEM3-group-2" },
	{ title: "Academeet", image: academeet, tags: ["React Native", "Full Stack", "Mobile", "UI/UX"], link: "https://github.com/icyclestick/academeet" },
	{ title: "CondoFlow", image: condoFlow, tags: ["Next.js", "Full Stack", "Databases", "UI/UX"], link: "https://github.com/icyclestick/CondoFlow" },
	{ title: "AGOS", image: agos, tags: ["Next.js", "Full Stack", "Algorithm", "UI/UX"], link: "https://github.com/icyclestick/AGOS" },
	{ title: "Assembly: Endgame", image: assembly, tags: ["Game Design", "React", "UI/UX"], link: "https://aisaiahsassemblyendgame.netlify.app/" },
	{ title: "Tenzies", image: tenzies, tags: ["Game Design", "React", "UI/UX"], link: "https://aisaiahstenzies.netlify.app/" },
	{ title: "Chef Claude", image: chefClaude, tags: ["Generative AI", "API", "React", "UI/UX"], link: "https://aisaiahschefclaude.netlify.app/" },
	{ title: "Meme Generator", image: meme, tags: ["API", "React", "UI/UX"], link: "https://github.com/icyclestick/Scrimba-Meme-Generator" },
	{ title: "Travel Journal", image: travelJournal, tags: ["React", "UI/UX"], link: "https://github.com/icyclestick/Travel-Journal" },
	{ title: "Black Jack", image: blackJack, tags: ["Next.js", "Databases", "UI/UX"], link: "https://v1.scrimba.com/playlist/p3py7U7" },
	{ title: "Leeds Extension", image: leedsTracker, tags: ["React Native", "Mobile", "UI/UX"], link: "https://github.com/icyclestick/academeet" },
	{ title: "Static Pages", image: staticPage, tags: ["React", "UI/UX"], link: "https://github.com/icyclestick" },
];

const ProjectItem = ({ index, title, image, tags, link, }) => {

	const [isHovered, setIsHovered] = useState(false);

	return (
		<a
			href={link}
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
					<img src={image} alt={`${title} Preview`} className="hover-image" style={{
						opacity: isHovered ? 1 : 0,
						transition: "opacity 0.3s ease",
					}} />
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
	link: PropTypes.string.isRequired,
	isHovered: PropTypes.bool,
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
