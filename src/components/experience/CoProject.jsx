import CoTitle from "../general/CoTitle";

import synth from "../../assets/imgs/vector/projects/synth.svg";
import geometry from "../../assets/imgs/vector/projects/geometry.svg";

import uam from "../../assets/imgs/vector/uam.svg";
import conamat from "../../assets/imgs/vector/projects/conamat.svg";
import ipn from "../../assets/imgs/vector/projects/ipn.svg";
import alcachofa from "../../assets/imgs/vector/projects/alcachofa.svg";

import { useContext } from "react";
import { MyContext } from "../context/MyContext";



let proPro = [
	{
		id: 2,
		name: "Synth",
		img: synth,
		date: "(august 2016 - june 2017)",
		des: "Virtual Synthesizer",
		link: "",
	},
	{
		id: 3,
		name: "Geometry Drawtech",
		img: geometry,
		date: "(august 2015 - june 2016)",
		des: "Blog & geometric solver",
		link: "",
	},
];
let proyPro = [
	{
		id: 2,
		name: "Synth",
		img: synth,
		date: "(agosto 2016 - junio 2017)",
		des: "Sintetizador virtual",
		link: "",
	},
	{
		id: 3,
		name: "Geometry Drawtech",
		img: geometry,
		date: "(agosto 2015 - junio 2016)",
		des: "Solucionador geométrico y blog",
		link: "",
	},
];

let proEdu = [
	{
		id: 1,
		name: "UAM AZCAPOTZALCO",
		img: uam,
		date: "(february 2020 - may 2020)",
		des: "Programming course teacher",
		link: "",
	},
	{
		id: 2,
		name: "CONAMAT",
		img: conamat,
		date: "(september 2018 - november 2019)",
		des: "Highschool-university teacher",
		link: "",
	},
	{
		id: 3,
		name: "IPN (CECyT 9)",
		img: ipn,
		date: "(march 2019 - april 2019)",
		des: "Lecturer",
		link: "",
	},
	{
		id: 4,
		name: "Corazón de Alcachofa",
		img: alcachofa,
		date: "(july 2018 - august 2018)",
		des: "English teacher",
		link: "",
	},
];
let proyEdu = [
	{
		id: 1,
		name: "UAM AZCAPOTZALCO",
		img: uam,
		date: "(febrero 2020 - mayo 2020)",
		des: "Profesor de programación",
		link: "",
	},
	{
		id: 2,
		name: "CONAMAT",
		img: conamat,
		date: "(septiembre 2018 - noviembre 2019)",
		des: "Profesor nivel bachillerato-universidad",
		link: "",
	},
	{
		id: 3,
		name: "IPN (CECyT 9)",
		img: ipn,
		date: "(marzo 2019 - abril 2019)",
		des: "Conferencista",
		link: "",
	},
	{
		id: 4,
		name: "Corazón de Alcachofa",
		img: alcachofa,
		date: "(julio 2018 - agosto 2018)",
		des: "Profesor de inglés",
		link: "",
	},
];

const CoProCard = ({ project }) => {
	return project.map((pro) => {
		if (pro.link === "") {
			return (
				<div key={pro.id} className="proj-card">
					<img loading="lazy" className="proj-card-img" src={pro.img} alt={pro.name}></img>
					<div className="proj-card-data">
						<h3 style={{ color: "#e6e6e6", textAlign: "left" }}>{pro.name}</h3>
						<p className="proj-card-data-date">{pro.date}</p>
						<p className="proj-card-data-description">{pro.des}</p>
					</div>
				</div>
			);
		} else {
			return (
				<a key={pro.id} href={pro.link} target="_blank" rel="noreferrer">
					<div className="proj-card">
						<img loading="lazy" className="proj-card-img" src={pro.img} alt={pro.name}></img>
						<div className="proj-card-data">
							<h3 style={{ color: "#e6e6e6", textAlign: "left" }}>{pro.name}</h3>
							<p className="proj-card-data-date">{pro.date}</p>
							<p className="proj-card-data-description">{pro.des}</p>
						</div>
					</div>
				</a>
			);
		}
	});
};

const CoProject = () => {
	const { language } = useContext(MyContext);

	const titles = ["Other","Projects"];
	const titulos = ["Otros","Proyectos"];

	return (
		<div className="dark MixN" style={{ zIndex: "3" }}>
			<CoTitle titles={language == "EN" ? titles : titulos} />
			<div
				className="div-content-plus"
				style={{ paddingBottom: "100px", gap: "1rem" }}
			>
				<br />
				<h3 style={{ color: "#e6e6e6" }}>
					{language == "EN" ? "Programming" : "Programación"}
				</h3>
				<div className="con-proj">
					<CoProCard project={language == "EN" ? proPro : proyPro} />
				</div>
				<br />
				<h3 style={{ color: "#e6e6e6" }}>
					{language == "EN" ? "Education" : "Educación"}
				</h3>
				<div className="con-proj">
					<CoProCard project={language == "EN" ? proEdu : proyEdu} />
				</div>
			</div>
		</div>
	);
};

export default CoProject;
