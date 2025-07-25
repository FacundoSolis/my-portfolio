import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const experienceList = [
	{
		time: "1994-2010",
		icon: "fa-solid fa-school",
		job: "Studies",
		company: "Dr. Manuel Pizarro",
		des: "In Argentina, where I completed Primary, Secondary, and Baccalaureate education.",
	},
	{
		time: "2013-2018",
		icon: "fa-solid fa-briefcase",
		job: "Technician",
		company: "Vodafone",
		des: "Network and systems technician.",
	},
	{
		time: "2018-2019",
		icon: "fa-solid fa-briefcase",
		job: "Technician",
		company: "Qualytel Orange",
		des: "Network and systems technician.",
	},
	{
		time: "2019-2021",
		icon: "fa-solid fa-briefcase",
		job: "Web Designer & Systems Technician",
		company: "CAB Solutions",
		des: "Web designer and systems technician.",
	},
	{
		time: "2021-2022",
		icon: "fa-solid fa-school",
		job: "Master in Online Marketing and Digital Analytics",
		company: "Esneca Business School",
		des: "Master in online marketing, social networks, and web analytics.",
	},
	{
		time: "2022-2023",
		icon: "fa-solid fa-school",
		job: "Graphic Design Course",
		company: "CONFAE",
		des: "Graphic design, web page design, and web programming.",
	},
	{
		time: "Nov 2024 -\n Present",
		icon: "fa-solid fa-briefcase",
		job: "Master FullStack Developer\nFullStack Developer & Programmer",
		company: "Conquer Blocks\nIDC Games",
		des: "Master in fullstack web development.\nDevelopment and maintenance of web platforms and internal systems. Stack: React, Node.js, databases, and microservices. Currently active.",
	},
];

function Experience() {
	const navigate = useNavigate();
	useEffect(() => {
		const section = document.querySelector(".experience-section");
		section.classList.add("fade-in");
	}, []);

  return (
	<section className="experience-section" style={{ width: '100vw', maxWidth: 'none', padding: 0, margin: 0 }}>
	  <h2 className="experience-title">Experience</h2>
	  <div className="experience-list">
		{experienceList.map((exp, i) => (
		  <div className="experience-item" key={i}>
			<div
			  className="experience-time"
			  style={{ whiteSpace: "pre-line" }}
			>
			  {exp.time}
			</div>
			<i className={exp.icon}></i>
			<div className="experience-content">
			  <div
				className="experience-job"
				style={{ whiteSpace: "pre-line" }}
			  >
				{exp.job}
			  </div>
			  <div
				className="experience-company"
				style={{ whiteSpace: "pre-line" }}
			  >
				{exp.company}
			  </div>
			  <div
				className="experience-des"
				style={{ whiteSpace: "pre-line" }}
			  >
				{exp.des}
			  </div>
			</div>
		  </div>
		))}
	  </div>
	  <button
		className="back-btn"
		onClick={() => navigate("/")}
		style={{ marginTop: "2.5rem" }}
	  >
		<i className="fa-solid fa-arrow-left"></i> Back Home
	  </button>
	</section>
  );
}

export default Experience;
