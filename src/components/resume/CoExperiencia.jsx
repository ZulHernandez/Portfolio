import CoTitle from "../general/CoTitle";
import CoTag from "../general/CoTag";
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

let experience = [
	{
		month: "february",
		company: "El Puerto de Liverpool",
		img: liverpool,
		duration: "(February 2023 - today)",
		role: "UI/UX Senior Designer",
		tags: ["job", "design", "programming"],
		side: "left",
		url: "https://www.liverpool.com.mx",
		des: "Research, prototype, and management of digital products for more than six brands.<br/>Creation, management, and automation of the company’s design framework.<br/>Development of plugins and tools for automating design and programming processes.",
	},
	{
		month: "may",
		company: "HUBBUB Alerta Ruido",
		img: hubbub,
		duration: "(may 2022 - today)",
		role: "UI/UX Developer & Designer",
		subc: uam,
		tags: ["project", "design", "programming"],
		url: "https://www.liverpool.com.mx",
		des: "Design and development of a data visualization website about the noise phenomenon in Mexico City and the Metropolitan Area.",
	},
	{
		month: "november",
		company: "Grupo PM",
		img: grupopm,
		duration: "(november 2021 - february 2023)",
		role: "UI/UX Senior Designer",
		subc: imss,
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
		tags: ["project", "design", "programming"],
		side: "left",
		url: "https://www.liverpool.com.mx",
		des: "Development and design of a Mini ERP and Marketplace for e-commerce of optical health products",
	},
	{
		month: "november",
		company: "Ingenieria y Desarrollo para Equipos Alimenticios (IDEA)",
		img: idea,
		duration: "(november 2018 - march 2019)",
		role: "Web Designer",
		subc: marsoft,
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
		tags: ["project", "design", "programming"],
		des: "Development and design of a web tool focused on teaching 3D Builder and Sketchfab for technical drawing students at IPN (National Polytechnic Institute).",
	},
];

const CoYear = ({ year }) => {
	return (
		<div className="year-label dark">
			<p className="year-label-title">{year}</p>
		</div>
	);
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
		iconHtml: "<img class='swal-icon' src='" + compa.img + "'></img>",
		html:
			"<h3>" +
			compa.company +
			"</h3><p class='job-card-data-duration'>" +
			compa.duration +
			"</p><p class='swal-title'>" +
			compa.role +
			"</p><div class='job-card-data-tags' style='justify-content: center'><img class='job-card-data-tags-img' style='display:" +
			subCoStyle +
			"' src=" +
			compa.subc +
			"></img>" +
			tagss +
			"</div><p class='swal-description'>" +
			compa.des +
			"</p><div class='button' style='display:" +
			display +
			"'><div onClick='window.open(`" +
			compa.url +
			"`, `_blank`)' class='button-tertiary clickable'>see more<img src=" +
			Farrow +
			"></img></div></div>",
		width: 600,
		padding: "3rem 3rem 5rem 3rem",
		background: "#fff",
		backdrop: "rgba(0,0,0,0.5)",
		showConfirmButton: false,
	});
}

const CoExpCard = ({ company }) => {
	return (
		<div
			className="job-card clickable"
			onClick={() => alerta(company)}
			style={{
				borderRadius:
					company.side == "left" ? "20px 20px 0px 20px" : "20px 20px 20px 0px",
			}}
		>
			<img className="job-card-img" src={company.img}></img>
			<div className="job-card-data">
				<div>
					<p className="job-card-data-duration">{company.duration}</p>
					<p className="job-card-data-company">{company.company}</p>
					<p className="job-card-data-role">{company.role}</p>
				</div>
				<CoTag tags={company.tags} subc={company.subc} />
			</div>
			<img className="job-card-out" src={out}></img>
		</div>
	);
};

const CoExp = ({ company }) => {
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
	const titles = ["experiencia", "y proyectos"];
	return (
		<div style={{ zIndex: "3" }} className="mixN" id="experience-projects">
			<CoTitle titles={titles} />
			<div id="exp-cont" className="div-content middle">
				<CoYear year="today" />
				<CoExp company={experience[0]} />
				<CoYear year="2023" />
				<CoExp company={experience[1]} />
				<CoYear year="2022" />
				<CoExp company={experience[2]} />
				<CoExp company={experience[3]} />
				<CoYear year="2021" />
				<CoExp company={experience[4]} />
				<CoYear year="2020" />
				<CoYear year="2019" />
				<CoExp company={experience[5]} />
				<CoExp company={experience[6]} />
				<CoExp company={experience[7]} />
				<CoYear year="2018" />
				<CoExp company={experience[8]} />
				<CoYear year="2017" />
				<CoExp company={experience[9]} />
				<CoYear year="2016" />
			</div>
		</div>
	);
};

export default CoExperiencia;
