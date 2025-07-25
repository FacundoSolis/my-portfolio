import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const basePath = import.meta.env.BASE_URL;

const projects = [
	{
		name: "Carla Serrano",
		url: "https://carlaserranocarniceria.es/",
		img: basePath + "images/carla-banner.png",
		index: "#1",
	},
	{
		name: "Enjoy Group",
		url: "https://enjoygroup.es/elchiringuito/",
		img: basePath + "images/enjoy-banner.png",
		index: "#2",
	},
	{
		name: "Iroko Restaurant",
		url: "https://irokomallorca.com/es/",
		img: basePath + "images/iroko-banner.png",
		index: "#3",
	},
	{
		name: "Musicarte Restaurant",
		url: "https://restaurantemusicarte.com/",
		img: basePath + "images/musi-banner.png",
		index: "#4",
	},
	{
		name: "Koma Sushi",
		url: "https://www.komasushi.es/",
		img: basePath + "images/koma-sushi.png",
		index: "#5",
	},
];


function Projects() {
	const navigate = useNavigate();

	useEffect(() => {
		const section = document.querySelector(".projects-section");
		section.classList.add("fade-in");
	}, []);

	return (
		<section className="projects-section">
			<h2 className="projects-title">My Projects</h2>
			<div className="projects-grid">
				{projects.map((project, i) => (
					<a
						className="project-card horizontal-card"
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						key={project.name}
					>
						<div className="project-img-wrapper">
							<img src={project.img} alt={project.name} />
							<span className="project-index">{project.index}</span>
						</div>
						<div className="project-name">{project.name}</div>
					</a>
				))}
			</div>
			<button className="back-btn" onClick={() => navigate(-1)}>
				<i className="fa-solid fa-arrow-left"></i> Go Back
			</button>
		</section>
	);
}

export default Projects;
