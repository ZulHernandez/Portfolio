import CoTitle from "../general/CoTitle";
import CoTag from "../general/CoTag";

import liverpool from "../../assets/imgs/vector/companies/Cliverpool.svg";
import hubbub from "../../assets/imgs/vector/companies/Chubbub.svg";
import uam from "../../assets/imgs/vector/companies/CUAM.svg";
import marsoft from "../../assets/imgs/vector/companies/CMarsoft.svg";
import gook from "../../assets/imgs/vector/companies/CGook.svg";
import grupopm from "../../assets/imgs/vector/companies/CPM.svg";
import sedema from "../../assets/imgs/vector/companies/CSEDEMA.svg";
import idea from "../../assets/imgs/vector/companies/CIDEA.svg";
import combucar from "../../assets/imgs/vector/companies/CCombucar.svg";
import yalmalay from "../../assets/imgs/vector/companies/CYalmalay.svg";
import polilibro from "../../assets/imgs/vector/companies/CPolilibro.svg";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function alerta(compa) {
	let tagss;
	let subCoStyle = "block";
	let display = "flex";

	!compa.url ? (display = "none") : (display = "flex");
	!compa.subc ? (subCoStyle = "none") : (subCoStyle = "block");

	tagss =
		"<span class='job-card-data-tags-tag " +
		compa.tags[0] +
		"'>" +
		compa.tags[0] +
		"</span>";

	for (let i = 1; i < compa.tags.length; i++) {
		tagss +=
			"<span class='job-card-data-tags-tag " +
			compa.tags[i] +
			"'>" +
			compa.tags[i] +
			"</span>";
	}

	Swal.fire({
		iconHtml:
			"<img loading='lazy' class='swal-icon' src='" +
			compa.img +
			"' alt='" +
			compa.company +
			"'></img>",
		html:
			"<h3>" +
			compa.company +
			"</h3><p class='job-card-data-duration'>" +
			compa.duration +
			"</p><p class='swal-title'>" +
			compa.role +
			"</p><div class='job-card-data-tags' style='justify-content: center'><img loading='lazy' class='job-card-data-tags-img' style='display:" +
			subCoStyle +
			"' src=" +
			compa.subc +
			" alt='" +
			compa.subcName +
			"'></img>" +
			tagss +
			"</div><p class='swal-description'>" +
			compa.des +
			"</p><div class='button' style='display:" +
			display +
			"'></div>",
		width: 600,
		padding: "3rem 3rem 5rem 3rem",
		background: "#fff",
		backdrop: "rgba(0,0,0,0.5)",
		showConfirmButton: false,
	});
}

let jobsPrincipal = [
	{
		id: 1,
		company: "El Puerto de Liverpool",
		img: liverpool,
		duration: "(February 2023 - today)",
		role: "UI/UX Senior Designer",
		tags: ["job", "design", "programming"],
		url: "../experience/liverpool",
	},
	{
		id: 2,
		company: "HUBBUB Alerta Ruido",
		img: hubbub,
		duration: "(may 2022 - today)",
		role: "UI/UX Developer & Designer",
		subc: uam,
		subcName: "UAM Azcapotzalco",
		tags: ["project", "design", "programming"],
		url: "../experience/hubbub",
	},
	{
		id: 3,
		company: "GOOK Óptica",
		img: gook,
		duration: "(august 2020 - september 2021)",
		role: "UI/UX Designer",
		subc: marsoft,
		subcName: "Marsoft",
		tags: ["project", "design", "programming"],
		url: "../experience/gook",
	},
];
let trabajosPrincipal = [
	{
		id: 1,
		company: "El Puerto de Liverpool",
		img: liverpool,
		duration: "(febrero 2023 - actualidad)",
		role: "Diseñador UI/UX Senior",
		tags: ["trabajo", "diseño", "programación"],
		url: "../experience/liverpool",
	},
	{
		id: 2,
		company: "HUBBUB Alerta Ruido",
		img: hubbub,
		duration: "(mayo 2022 - actualidad)",
		role: "Diseñador y desarrollador UI/UX",
		subc: uam,
		subcName: "UAM Azcapotzalco",
		tags: ["proyecto", "diseño", "programación"],
		url: "../experience/hubbub",
	},
	{
		id: 3,
		company: "GOOK Óptica",
		img: gook,
		duration: "(agosto 2020 - septiembre 2021)",
		role: "Diseñador UI/UX",
		subc: marsoft,
		subcName: "Marsoft",
		tags: ["proyecto", "diseño", "programación"],
		url: "https://www.liverpool.com.mx",
	},
];

let jobsSecond = [
	{
		id: 1,
		company: "Grupo PM",
		img: grupopm,
		duration: "(november 2021 - february 2023)",
		role: "UI/UX Senior Designer",
		tags: ["job", "design", "programming"],
		des: "Definition of user stories and creation of prototypes for different external and internal tools of the Mexican Social Security Institute.",
	},
	{
		id: 2,
		company: "Secretaria del Medio Ambiente de la CDMX",
		img: sedema,
		duration: "(may 2021 - november 2021)",
		role: "Web Designer",
		subc: uam,
		tags: ["project", "design", "programming"],
		des: "Prototyping and development of a website for the presentation of the Protected Natural Areas of Mexico City.",
	},
	{
		id: 3,
		company: "Ingenieria y Desarrollo para Equipos Alimenticios (IDEA)",
		img: idea,
		duration: "(november 2018 - march 2019)",
		role: "Web Designer",
		subc: marsoft,
		tags: ["project", "design", "programming"],
		des: "Prototyping and development of a website for a company in the food engineering industry.",
	},
	{
		id: 4,
		company: "Combucar",
		img: combucar,
		duration: "(november 2018 - february 2019)",
		role: "Web Designer",
		subc: marsoft,
		tags: ["project", "design", "programming"],
		des: "Design and development of a website for a company dedicated to the installation of natural gas in motor vehicles.",
	},
	{
		id: 5,
		company: "Marsoft",
		img: marsoft,
		duration: "(april 2018 - november 2021)",
		role: "Co-founder / Design Director",
		tags: ["company", "job", "design", "programming"],
		des: "Foundation of a company dedicated to software development and business design.<br/>Management of projects and work teams in both areas of the company.<br/>Constant communication with clients, definition of requirements, and testing.",
	},
	{
		id: 6,
		company: "Yalmalay",
		img: yalmalay,
		duration: "(may 2017 - october 2017)",
		role: "Web Developer & Designer",
		tags: ["project", "design", "programming"],
		des: "Development of a web and mobile application to offer home beauty services.",
	},
	{
		id: 7,
		company: "Poli Libro",
		img: polilibro,
		duration: "(november 2016 - february 2017)",
		role: "Web Developer & Designer",
		subc: marsoft,
		tags: ["project", "design", "programming"],
		des: "Development and design of a web tool focused on teaching 3D Builder and Sketchfab for technical drawing students at IPN (National Polytechnic Institute).",
	},
];
let trabajosSecond = [
	{
		id: 1,
		company: "Grupo PM",
		img: grupopm,
		duration: "(Noviembre 2021 - febrero 2023)",
		role: "Diseñador UI/UX Senior",
		tags: ["trabajo", "diseño", "programación"],
		des: "Definición de historias de usuarios y creación de prototipos para diferentes herramientas externas e internas del Instituto Mexicano del Seguro Social.",
	},
	{
		id: 2,
		company: "Secretaria del Medio Ambiente de la CDMX",
		img: sedema,
		duration: "(mayo 2021 - noviembre 2021)",
		role: "Diseñador Web",
		subc: uam,
		tags: ["proyecto", "diseño", "programación"],
		des: "Protipado y desarrollo de sitio web para la presentación de las Áreas Naturales Protegidas de la Ciudad de México.",
	},
	{
		id: 3,
		company: "Ingenieria y Desarrollo para Equipos Alimenticios (IDEA)",
		img: idea,
		duration: "(noviembre 2018 - marzo 2019)",
		role: "Diseñador Web",
		subc: marsoft,
		tags: ["proyecto", "diseño", "programación"],
		des: "Prototipado y desarrollo de sitio web para empresa con giro en ingeniería de alimentos.",
	},
	{
		id: 4,
		company: "Combucar",
		img: combucar,
		duration: "(noviembre 2018 - febrero 2019)",
		role: "Diseñador Web",
		subc: marsoft,
		tags: ["proyecto", "diseño", "programación"],
		des: "Diseño y desarrollo de sitio web para empresa dedicada a la instalación de Gas natural en vehiculos automotores.",
	},
	{
		id: 5,
		company: "Marsoft",
		img: marsoft,
		duration: "(abril 2018 - noviembre 2021)",
		role: "Co-fundador / Director de diseño",
		tags: ["compañía", "trabajo", "diseño", "programación"],
		des: "Fundación de una compañía dedicada al desarrollo de software y diseño empresarial.<br/>Administración de proyectos y equipos de trabajo en ambos giros de la empresa. Comunicación constante con clientes, definición de requerimientos y testeo.",
	},
	{
		id: 6,
		company: "Yalmalay",
		img: yalmalay,
		duration: "(mayo 2017 - octubre 2017)",
		role: "Diseñador y desarrollador Web",
		tags: ["proyecto", "diseño", "programación"],
		des: "Desarrollo de aplicación web y mobile para ofrecer servicios de estética a domicilio.",
	},
	{
		id: 7,
		company: "Poli Libro",
		img: polilibro,
		duration: "(noviembre 2016 - febrero 2017)",
		role: "Diseñador y desarrollador Web",
		subc: marsoft,
		tags: ["proyecto", "diseño", "programación"],
		des: "Desarrollo y diseño de herramienta web enfocada en la enseñanza de 3D Builder y Sketchfab para estudiantes de dibujo técnico en el IPN.",
	},
];

const CoJobsSec = () => {
	const { language } = useContext(MyContext);
	let data;
	language == "EN" ? (data = jobsSecond) : (data = trabajosSecond);

	return data.map((job) => {
		return (
			<div
				className="job-sec-card clickable"
				onClick={() => alerta(job)}
				key={job.id}
			>
				<img loading="lazy" className="job-sec-card-img" src={job.img} alt={job.company} />
				<h3 className="job-sec-card-data-title">{job.company}</h3>
				<div className="job-sec-card-data">
					<h4 className="job-sec-card-data-duration">{job.duration}</h4>
					<h4 className="job-sec-card-data-role">{job.role}</h4>
				</div>
			</div>
		);
	});
};

const CoJobsPri = () => {
	const { language } = useContext(MyContext);
	let data;
	language == "EN" ? (data = jobsPrincipal) : (data = trabajosPrincipal);

	return data.map((job) => {
		return (
			<Link key={job.id} to={job.url}>
				<div className="job-pri-card clickable">
					<img loading="lazy" className="job-pri-card-img" src={job.img} alt={job.company} />
					<h3 className="job-card-data-title">{job.company}</h3>
					<h4 className="job-card-data-duration">{job.duration}</h4>
					<h4 className="job-card-data-role">{job.role}</h4>
					<CoTag tags={job.tags} subc={job.subc} align="center" />
				</div>
			</Link>
		);
	});
};

const CoHome = () => {
	const { language } = useContext(MyContext);

	//* Título de la sección
	let titles = ["JOBS"];
	let titulos = ["TRABAJOS"];

	return (
		<div id="jobs" style={{ zIndex: "1" }}>
			<CoTitle titles={language == "EN" ? titles : titulos} space="-plus" />
			<div className="div-content-plus" style={{ paddingBottom: "100px" }}>
				<div className="cont-exp">
					<h2>{language == "EN" ? "Experience" : "Experiencia"}</h2>
					<div className="cont-jobs-pri">
						<CoJobsPri />
					</div>
				</div>
				<div className="cont-exp">
					<h3>
						{language == "EN" ? "Another experiences" : "Otras experiencias"}
					</h3>
					<div className="cont-jobs-sec">
						<CoJobsSec />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoHome;
