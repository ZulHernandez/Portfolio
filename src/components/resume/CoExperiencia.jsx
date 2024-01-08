import CoTitle from "../general/CoTitle";
import CoTag from "../general/CoTag";
import CoCardCopa from "../general/CoCardCopa";
import liverpool from "../../assets/imgs/vector/companies/Cliverpool.svg";
import hubbub from "../../assets/imgs/vector/companies/Chubbub.svg";
import grupopm from "../../assets/imgs/vector/companies/CPM.svg";
import sedema from "../../assets/imgs/vector/companies/CSedema.svg";
import gook from "../../assets/imgs/vector/companies/CGOOK.svg";
import idea from "../../assets/imgs/vector/companies/CIDEA.svg";
import combucar from "../../assets/imgs/vector/companies/CCombucar.svg";
import marsoft from "../../assets/imgs/vector/companies/CMarsoft.svg";
import yalmalay from "../../assets/imgs/vector/companies/CYalmalay.svg";
import polilibro from "../../assets/imgs/vector/companies/CPolilibro.svg";
import uam from "../../assets/imgs/vector/companies/CUAM.svg";
import imss from "../../assets/imgs/vector/companies/CIMSS.svg";
import Farrow from "../../assets/imgs/vector/arrow_forward.svg";
import out from "../../assets/imgs/vector/outward.svg";
import Swal from "sweetalert2";

import { useContext } from "react";
import { MyContext } from "../../components/context/MyContext";
import { Link } from "react-router-dom";

import bannerCV from "../../assets/imgs/bitmap/banners/cv.png";
import bannerLinkedIn from "../../assets/imgs/bitmap/banners/linkedin.png";
import bannerBehance from "../../assets/imgs/bitmap/banners/behance.png";
import bannerGitHub from "../../assets/imgs/bitmap/banners/github.png";

let experience = [
	{
		month: "february",
		company: "El Puerto de Liverpool",
		img: liverpool,
		duration: "(February 2023 - today)",
		role: "UI/UX Senior Designer",
		tags: ["job", "design", "programming"],
		side: "left",
		url: "/experience/liverpool",
		des: "Research, prototype, and management of digital products for more than six brands.<br/>Creation, management, and automation of the company’s design framework.<br/>Development of plugins and tools for automating design and programming processes.",
	},
	{
		month: "may",
		company: "HUBBUB Alerta Ruido",
		img: hubbub,
		duration: "(may 2022 - today)",
		role: "UI/UX Developer & Designer",
		subc: uam,
		subcName: "UAM Azcapotzalco",
		tags: ["project", "design", "programming"],
		url: "/experience/hubbub",
		des: "Design and development of a data visualization website about the noise phenomenon in Mexico City and the Metropolitan Area.",
	},
	{
		month: "november",
		company: "Grupo PM",
		img: grupopm,
		duration: "(november 2021 - february 2023)",
		role: "UI/UX Senior Designer",
		subc: imss,
		subcName: "IMSS",
		tags: ["job", "design"],
		side: "left",
		des: "Definition of user stories and creation of prototypes for different external and internal tools of the Mexican Social Security Institute.",
	},
	{
		month: "may",
		company: "Secretaria del Medio Ambiente de la CDMX",
		img: sedema,
		duration: "(may 2021 - november 2021)",
		role: "Web Designer",
		subc: uam,
		subcName: "UAM Azcapotzalco",
		tags: ["project", "design", "programming"],
		des: "Prototyping and development of a website for the presentation of the Protected Natural Areas of Mexico City.",
	},
	{
		month: "august",
		company: "GOOK Óptica",
		img: gook,
		duration: "(august 2020 - september 2021)",
		role: "UI/UX Designer",
		subc: marsoft,
		subcName: "Marsoft",
		tags: ["project", "design", "programming"],
		side: "left",
		url: "/experience/gook",
		des: "Development and design of a Mini ERP and Marketplace for e-commerce of optical health products",
	},
	{
		month: "november",
		company: "Ingenieria y Desarrollo para Equipos Alimenticios (IDEA)",
		img: idea,
		duration: "(november 2018 - march 2019)",
		role: "Web Designer",
		subc: marsoft,
		subcName: "Marsoft",
		tags: ["project", "design", "programming"],
		des: "Prototyping and development of a website for a company in the food engineering industry.",
	},
	{
		month: "november",
		company: "Combucar",
		img: combucar,
		duration: "(november 2018 - february 2019)",
		role: "Web Designer",
		subc: marsoft,
		subcName: "Marsoft",
		tags: ["project", "design", "programming"],
		side: "left",
		des: "Design and development of a website for a company dedicated to the installation of natural gas in motor vehicles.",
	},
	{
		month: "april",
		company: "Marsoft",
		img: marsoft,
		duration: "(april 2018 - november 2021)",
		role: "Co-founder / Design Director",
		tags: ["company", "job", "design", "programming"],
		des: "Foundation of a company dedicated to software development and business design.<br/>Management of projects and work teams in both areas of the company.<br/>Constant communication with clients, definition of requirements, and testing.",
	},
	{
		month: "may",
		company: "Yalmalay",
		img: yalmalay,
		duration: "(may 2017 - october 2017)",
		role: "Web Developer & Designer",
		tags: ["project", "design", "programming"],
		side: "left",
		des: "Development of a web and mobile application to offer home beauty services.",
	},
	{
		month: "november",
		company: "Poli Libro",
		img: polilibro,
		duration: "(november 2016 - february 2017)",
		role: "Web Developer & Designer",
		subc: marsoft,
		subcName: "Marsoft",
		tags: ["project", "design", "programming"],
		des: "Development and design of a web tool focused on teaching 3D Builder and Sketchfab for technical drawing students at IPN (National Polytechnic Institute).",
	},
];
let experiencia = [
	{
		month: "febrero",
		company: "El Puerto de Liverpool",
		img: liverpool,
		duration: "(febrero 2023 - actualidad)",
		role: "Diseñador UI/UX Senior",
		tags: ["trabajo", "diseño", "programación"],
		side: "left",
		url: "/experience/liverpool",
		des: "Investigación, prototipo y administración de productos digitales para más de seis marcas.<br/>Creación, administración y automatización del framework de diseño de la empresa.<br/>Desarrollo de plugin y herramientas para automatización de procesos de diseño y programación.",
	},
	{
		month: "mayo",
		company: "HUBBUB Alerta Ruido",
		img: hubbub,
		duration: "(mayo 2022 - actualidad)",
		role: "Diseñador y desarrollador UI/UX",
		subc: uam,
		subcName: "UAM Azcapotzalco",
		tags: ["proyecto", "diseño", "programación"],
		url: "/experience/hubbub",
		des: "Definición de historias de usuarios y creación de prototipos para diferentes herramientas externas e internas del Instituto Mexicano del Seguro Social.",
	},
	{
		month: "noviembre",
		company: "Grupo PM",
		img: grupopm,
		duration: "(noviembre 2021 - febrero 2023)",
		role: "Diseñador UI/UX Senior",
		subc: imss,
		subcName: "IMSS",
		tags: ["trabajo", "diseño"],
		side: "left",
		des: "Definición de historias de usuarios y creación de prototipos para diferentes herramientas externas e internas del Instituto Mexicano del Seguro Social.",
	},
	{
		month: "mayo",
		company: "Secretaria del Medio Ambiente de la CDMX",
		img: sedema,
		duration: "(mayo 2021 - noviembre 2021)",
		role: "Diseñador Web",
		subc: uam,
		subcName: "UAM Azcapotzalco",
		tags: ["proyecto", "diseño", "programación"],
		des: "Prototipo y desarrollo de sitio web para la presentación de las Áreas Naturales Protegidas de la Ciudad de México.",
	},
	{
		month: "agosto",
		company: "GOOK Óptica",
		img: gook,
		duration: "(agosto 2020 - septiembre 2021)",
		role: "Diseñador UI/UX",
		subc: marsoft,
		subcName: "Marsoft",
		tags: ["proyecto", "diseño", "programación"],
		side: "left",
		url: "/experience/liverpool",
		des: "Desarrollo y diseño de Mini ERP y Marketplace para e-commerce de productos de la salud óptica.",
	},
	{
		month: "noviembre",
		company: "Ingeniería y Desarrollo para Equipos Alimenticios (IDEA)",
		img: idea,
		duration: "(noviembre 2018 - marzo 2019)",
		role: "Diseñador Web",
		subc: marsoft,
		subcName: "Marsoft",
		tags: ["proyecto", "diseño", "programación"],
		des: "Prototipo y desarrollo de sitio web para empresa con giro en ingeniería de alimentos.",
	},
	{
		month: "noviembre",
		company: "Combucar",
		img: combucar,
		duration: "(noviembre 2018 - febrero 2019)",
		role: "Diseñador Web",
		subc: marsoft,
		subcName: "Marsoft",
		tags: ["proyecto", "diseño", "programación"],
		side: "left",
		des: "Diseño y desarrollo de sitio web para empresa dedicada a la instalación de Gas natural en vehículos automotores.",
	},
	{
		month: "abril",
		company: "Marsoft",
		img: marsoft,
		duration: "(abril 2018 - noviembre 2021)",
		role: "Co-fundador / Director de Diseño",
		tags: ["compañía", "trabajo", "diseño", "programación"],
		des: "Administración de proyectos y equipos de trabajo en ambos giros de la empresa. Comunicación constante con clientes, definición de requerimientos y test.<br/>Fundación de una compañía dedicada al desarrollo de software y diseño empresarial.",
	},
	{
		month: "mayo",
		company: "Yalmalay",
		img: yalmalay,
		duration: "(mayo 2017 - octubre 2017)",
		role: "Diseñador y desarrollador Web",
		tags: ["proyecto", "diseño", "programación"],
		side: "left",
		des: "Desarrollo de aplicación web y mobile para ofrecer servicios de estética a domicilio.",
	},
	{
		month: "noviembre",
		company: "Poli Libro",
		img: polilibro,
		duration: "(noviembre 2016 - febrero 2017)",
		role: "Diseñador y desarrollador Web",
		subc: marsoft,
		subcName: "Marsoft",
		tags: ["proyecto", "diseño", "programación"],
		des: "Desarrollo y diseño de herramienta web enfocada en la enseñanza de 3D Builder y Sketchfab para estudiantes de dibujo técnico en el IPN.",
	},
];

import PropTypes from "prop-types";

const CoYear = ({ year }) => {
	return (
		<div className="year-label dark">
			<p className="year-label-title">{year}</p>
		</div>
	);
};

CoYear.propTypes = {
	year: PropTypes.string.isRequired,
};

const CoMonth = (props) => {
	return (
		<div
			className="date-lateral-month"
			style={{
				borderWidth:
					props.side == "left" ? "0px 0px 0px 3px" : "0px 3px 0px 0px",
			}}
		>
			<p className="date-lateral-month-label">{props.month}</p>
		</div>
	);
};

CoMonth.propTypes = {
	month: PropTypes.string.isRequired,
	side: PropTypes.string.isRequired,
};

function alerta(compa, language) {
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

	let botonText = language == "EN" ? "SEE MORE" : "VER MÁS";

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

const CoExpCard = ({ company }) => {
	const { language } = useContext(MyContext);

	CoExpCard.propTypes = {
		company: PropTypes.object.isRequired,
	};

	return (
		<div
			className="job-card clickable"
			style={{
				borderRadius:
					company.side == "left" ? "20px 20px 0px 20px" : "20px 20px 20px 0px",
			}}
		>
			<img
				onClick={() => alerta(company, language)}
				loading="lazy"
				className="job-card-img"
				src={company.img}
				alt={company.company}
			></img>
			<div className="job-card-data" onClick={() => alerta(company, language)}>
				<div>
					<p className="job-card-data-duration">{company.duration}</p>
					<p className="job-card-data-company">{company.company}</p>
					<p className="job-card-data-role">{company.role}</p>
				</div>
				<CoTag
					tags={company.tags}
					subc={company.subc}
					subcName={company.subcName}
				/>
			</div>
			<div style={{ display: company.url ? "flex" : "none" }}>
				<Link to={"" + company.url}>
					<span
						className="button-tertiary clickable"
						style={{
							justifyContent: "flex-end",
							alignItems: "flex-start",
							margin: "0",
						}}
					>
						{language == "EN" ? "SEE MORE +" : "VER MÁS +"}
					</span>
				</Link>
			</div>
		</div>
	);
};

const CoExp = ({ company }) => {
	CoExp.propTypes = {
		company: PropTypes.object.isRequired,
	};

	let side = company.side;

	if (side === "left") {
		return (
			<div className="exp-card">
				<CoExpCard company={company} />
				<div className="date-lateral">
					<div className="date-lateral-line dark"></div>
					<CoMonth month={company.month} side="left" />
				</div>
				<div
					className="job-card"
					style={{ boxShadow: "-25px 25px 50px 0px rgba(51, 51, 51, 0)" }}
				></div>
			</div>
		);
	} else {
		return (
			<div className="exp-card">
				<div
					className="job-card"
					style={{ boxShadow: "-25px 25px 50px 0px rgba(51, 51, 51, 0)" }}
				></div>
				<div className="date-lateral">
					<div className="date-lateral-line dark"></div>
					<CoMonth month={company.month} side="right" />
				</div>
				<CoExpCard company={company} />
			</div>
		);
	}
};

const CoExperiencia = () => {
	const { language } = useContext(MyContext);

	let casos = [
		{
			id: 1,
			banner: bannerCV,
			title: language == "EN" ? "Resume" : "Currículum",
			sub:
				language == "EN"
					? "Read and download my personal resume"
					: "Lee y descarga mi currículum personal",
			link: "https://drive.google.com/file/d/1xEG-wwRRmfoqxibw3679_W8au78mYfuj/view?usp=sharing",
		},
		/* {
			id: 2,
			banner: bannerLinkedIn,
			title: "LinkedIn",
			sub: language == "EN"
			? "Here is my LinkedIn professional profile"
			: "Aquí mi perfil profesional de LinkedIn",
			link: "https://www.linkedin.com/in/saululises/",
		}, */
		{
			id: 3,
			banner: bannerBehance,
			title: "Behance",
			sub: language == "EN"
			? "Other design projects an collaboration outside UX&UI"
			: "Otros proyectos de diseño y colaboraciones fuera de UX&UI",
			link: "https://www.behance.net/zulhernndez",
		},
		{
			id: 4,
			banner: bannerGitHub,
			title: "GitHub",
			sub: language == "EN"
			? "Repositories and software projects"
			: "Repositorios y proyectos de software",
			link: "https://github.com/ZulHernandez",
		},
	];

	const titles = ["experience", "& projects"];
	const titulos = ["experiencia", "y proyectos"];

	return (
		<div
			style={{ zIndex: "3" }}
			className="mixN"
			id={language == "EN" ? "experience-projects" : "experiencia-proyectos"}
		>
			<CoTitle titles={language == "EN" ? titles : titulos} />
			<div id="exp-cont" className="div-content middle">
				<Link to="/experience">
					<div className="button-tertiary clickable" style={{ width: "100%" }}>
						{language == "EN"
							? "Explore whole experience"
							: "Explora toda mi experiencia"}
					</div>
				</Link>
				<div
					className="date-lateral-line dark"
					style={{ height: "50px" }}
				></div>
				<CoYear year={language == "EN" ? "TODAY" : "ACTUALIDAD"} />
				<CoExp company={language == "EN" ? experience[0] : experiencia[0]} />
				<CoYear year="2023" />
				<CoExp company={language == "EN" ? experience[1] : experiencia[1]} />
				<CoYear year="2022" />
				<CoExp company={language == "EN" ? experience[2] : experiencia[2]} />
				<CoExp company={language == "EN" ? experience[3] : experiencia[3]} />
				<CoYear year="2021" />
				<CoExp company={language == "EN" ? experience[4] : experiencia[4]} />
				<CoYear year="2020" />
				<CoYear year="2019" />
				<CoExp company={language == "EN" ? experience[5] : experiencia[5]} />
				<CoExp company={language == "EN" ? experience[6] : experiencia[6]} />
				<CoExp company={language == "EN" ? experience[7] : experiencia[7]} />
				<CoYear year="2018" />
				<CoExp company={language == "EN" ? experience[8] : experiencia[8]} />
				<CoYear year="2017" />
				<CoExp company={language == "EN" ? experience[9] : experiencia[9]} />
				<CoYear year="2016" />
				<div
					className="date-lateral-line dark"
					style={{ height: "50px" }}
				></div>
				<Link to="/experience">
					<div
						className="button-tertiary clickable"
						style={{ width: "100%", margin: "0" }}
					>
						{language == "EN"
							? "Explore whole experience"
							: "Explora toda mi experiencia"}
					</div>
				</Link>
				<br />
				<br />
				<div className="cont-caso">
					<CoCardCopa casos={casos} />
				</div>
			</div>
		</div>
	);
};

export default CoExperiencia;
