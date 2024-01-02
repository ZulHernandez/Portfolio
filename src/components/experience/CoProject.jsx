import CoTitle from "../general/CoTitle";

import wireframes from "../../assets/imgs/vector/projects/wireframes.svg";
import synth from "../../assets/imgs/vector/projects/synth.svg";
import geometry from "../../assets/imgs/vector/projects/geometry.svg";
import aleph from "../../assets/imgs/vector/projects/aleph.svg";
import fee from "../../assets/imgs/vector/projects/fee.svg";
import memphis from "../../assets/imgs/vector/projects/memphis.svg";
import central from "../../assets/imgs/vector/projects/central.svg";
import monarch from "../../assets/imgs/vector/projects/monarch.svg";
import spirukit from "../../assets/imgs/vector/projects/spirukit.svg";
import kashmir from "../../assets/imgs/vector/projects/kashmir.svg";
import beruon from "../../assets/imgs/vector/projects/beruon.svg";
import apoco from "../../assets/imgs/vector/projects/apoco.svg";
import barrio from "../../assets/imgs/vector/projects/barrio.svg";
import feminismo from "../../assets/imgs/vector/projects/feminismo.svg";
import hollow from "../../assets/imgs/vector/projects/hollow.svg";
import nhoro from "../../assets/imgs/vector/projects/nhoro.svg";
import milano from "../../assets/imgs/vector/projects/milano.svg";
import junji from "../../assets/imgs/vector/projects/junji.svg";
import re from "../../assets/imgs/vector/projects/re.svg";
import about from "../../assets/imgs/vector/projects/about.svg";
import uam from "../../assets/imgs/vector/uam.svg";
import conamat from "../../assets/imgs/vector/projects/conamat.svg";
import ipn from "../../assets/imgs/vector/projects/ipn.svg";
import alcachofa from "../../assets/imgs/vector/projects/alcachofa.svg";

import { useContext } from "react";
import { MyContext } from "../context/MyContext";

let proPro = [
	{
		id: 1,
		name: "Wireframes",
		img: wireframes,
		date: "(august 2020)",
		des: "Wireframes & mockup",
		link: "https://www.behance.net/gallery/125290739/Wireframes",
	},
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
		id: 1,
		name: "Wireframes",
		img: wireframes,
		date: "(agosto 2020)",
		des: "Wireframes y mockup",
		link: "https://www.behance.net/gallery/125290739/Wireframes",
	},
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

let proMult = [
	{
		id: 1,
		name: "Aleph",
		img: aleph,
		date: "(may 2020 - today)",
		des: "History & philosophy podcast",
		link: "https://www.behance.net/gallery/121921673/aleph-podcast",
	},
	{
		id: 2,
		name: "La feé verte",
		img: fee,
		date: "(august 2021 - october 2021)",
		des: "Short film",
		link: "https://www.behance.net/gallery/165004029/La-Fe-Verte",
	},
	{
		id: 3,
		name: "Memphis Belle",
		img: memphis,
		date: "(february 2019 - march 2019)",
		des: "Music video",
		link: "https://www.youtube.com/watch?v=tv5D-lqWiSk&ab_channel=MemphisBelleMx",
	},
	{
		id: 4,
		name: "Central de acción",
		img: central,
		date: "(march 2017)",
		des: "Professional presentation",
		link: "",
	},
];
let proyMult = [
	{
		id: 1,
		name: "Aleph",
		img: aleph,
		date: "(mayo 2020 - actualidad)",
		des: "Podcast de historia y filosofía",
		link: "https://www.behance.net/gallery/121921673/aleph-podcast",
	},
	{
		id: 2,
		name: "La feé verte",
		img: fee,
		date: "(agosto 2021 - octubre 2021)",
		des: "Cortometraje",
		link: "https://www.behance.net/gallery/165004029/La-Fe-Verte",
	},
	{
		id: 3,
		name: "Memphis Belle",
		img: memphis,
		date: "(febrero 2019 - marzo 2019)",
		des: "Video musical",
		link: "https://www.youtube.com/watch?v=tv5D-lqWiSk&ab_channel=MemphisBelleMx",
	},
	{
		id: 4,
		name: "Central de acción",
		img: central,
		date: "(marzo 2017)",
		des: "Presentación profesional",
		link: "",
	},
];

let proBrand = [
	{
		id: 1,
		name: "Monarch",
		img: monarch,
		date: "(january 2021 - april 2021)",
		des: "Design company",
		link: "https://www.behance.net/gallery/165169467/MONARCH",
	},
	{
		id: 2,
		name: "Spirukit",
		img: spirukit,
		date: "(february 2021 - february 2022)",
		des: "Bio-food startup",
		link: "https://www.behance.net/gallery/125298483/Spiru-Kit-Fresh-Spirulina",
	},
	{
		id: 3,
		name: "Kashmir",
		img: kashmir,
		date: "(august 2021 - november 2021)",
		des: "HiFi audio company",
		link: "https://www.behance.net/gallery/124647895/Kashmir",
	},
	{
		id: 4,
		name: "Beruon",
		img: beruon,
		date: "(december 2019 - september 2021)",
		des: "Programming company",
		link: "https://www.behance.net/gallery/121925513/Beruon",
	},
	{
		id: 5,
		name: "¿Apoco sí?",
		img: apoco,
		date: "(december 2020 - august 2021)",
		des: "Table game",
		link: "https://www.behance.net/gallery/124701913/Apoco-si",
	},
	{
		id: 6,
		name: "Pa' hablar barrio",
		img: barrio,
		date: "(december 2020 - august 2021)",
		des: "Fictional product",
		link: "https://www.behance.net/gallery/124718727/Pa-Hablar-Barrio",
	},
];
let proyBrand = [
	{
		id: 1,
		name: "Monarch",
		img: monarch,
		date: "(enero 2021 - abril 2021)",
		des: "Compañía de diseño",
		link: "https://www.behance.net/gallery/165169467/MONARCH",
	},
	{
		id: 2,
		name: "Spirukit",
		img: spirukit,
		date: "(febrero 2021 - febrero 2022)",
		des: "Startup de Bio-comida",
		link: "https://www.behance.net/gallery/125298483/Spiru-Kit-Fresh-Spirulina",
	},
	{
		id: 3,
		name: "Kashmir",
		img: kashmir,
		date: "(agosto 2021 - noviembre 2021)",
		des: "Compañía de audio HiFi",
		link: "https://www.behance.net/gallery/124647895/Kashmir",
	},
	{
		id: 4,
		name: "Beruon",
		img: beruon,
		date: "(diciembre 2019 - septiembre 2021)",
		des: "Compañía de programación",
		link: "https://www.behance.net/gallery/121925513/Beruon",
	},
	{
		id: 5,
		name: "¿Apoco sí?",
		img: apoco,
		date: "(diciembre 2020 - agosto 2021)",
		des: "Juego de mesa",
		link: "https://www.behance.net/gallery/124701913/Apoco-si",
	},
	{
		id: 6,
		name: "Pa' hablar barrio",
		img: barrio,
		date: "(diciembre 2020 - agosto 2021)",
		des: "Producto utópico",
		link: "https://www.behance.net/gallery/124718727/Pa-Hablar-Barrio",
	},
];

let proEditorial = [
	{
		id: 1,
		name: "Feminism history",
		img: feminismo,
		date: "(august 2021 - march 2022)",
		des: "Infographic",
		link: "https://www.behance.net/gallery/162886465/Waves-of-feminism",
	},
	{
		id: 2,
		name: "Hollowknight",
		img: hollow,
		date: "(june 2021 - september 2021)",
		des: "Infographic",
		link: "https://www.behance.net/gallery/162885415/Hollowknight-Infography",
	},
	{
		id: 3,
		name: "Nhoro",
		img: nhoro,
		date: "(june 2020 - january 2021)",
		des: "Magazine",
		link: "https://www.behance.net/gallery/124633193/nhr",
	},
	{
		id: 4,
		name: "Milano",
		img: milano,
		date: "(june 2017 - february 2019)",
		des: "Internal magazine",
		link: "",
	},
];
let proyEditorial = [
	{
		id: 1,
		name: "Historia del feminismo",
		img: feminismo,
		date: "(agosto 2021 - marzo 2022)",
		des: "Infografía",
		link: "https://www.behance.net/gallery/162886465/Waves-of-feminism",
	},
	{
		id: 2,
		name: "Hollowknight",
		img: hollow,
		date: "(junio 2021 - septiembre 2021)",
		des: "Infografía",
		link: "https://www.behance.net/gallery/162885415/Hollowknight-Infography",
	},
	{
		id: 3,
		name: "Nhoro",
		img: nhoro,
		date: "(junio 2020 - enero 2021)",
		des: "Revista",
		link: "https://www.behance.net/gallery/124633193/nhr",
	},
	{
		id: 4,
		name: "Milano",
		img: milano,
		date: "(junio 2017 - febrero 2019)",
		des: "Publicación interna",
		link: "",
	},
];

let proMisc = [
	{
		id: 1,
		name: "Junji Ito Expo",
		img: junji,
		date: "(june 2021 - august 2021)",
		des: "Museography",
		link: "https://www.behance.net/gallery/124775143/Junji-Ito-()-Expo",
	},
	{
		id: 2,
		name: ":RE:",
		img: re,
		date: "(january 2021 - march 2021)",
		des: "Character design",
		link: "https://www.behance.net/gallery/130462841/RE",
	},
	{
		id: 3,
		name: "About Illustration",
		img: about,
		date: "(september 2020 - november 2020)",
		des: "Illustration",
		link: "https://www.behance.net/gallery/130388913/about-illustration",
	},
];
let proyMisc = [
	{
		id: 1,
		name: "Junji Ito Expo",
		img: junji,
		date: "(junio 2021 - agosto 2021)",
		des: "Museografía",
		link: "https://www.behance.net/gallery/124775143/Junji-Ito-()-Expo",
	},
	{
		id: 2,
		name: ":RE:",
		img: re,
		date: "(enero 2021 - marzo 2021)",
		des: "Diseño de personaje",
		link: "https://www.behance.net/gallery/130462841/RE",
	},
	{
		id: 3,
		name: "About Illustration",
		img: about,
		date: "(septiembre 2020 - noviembre 2020)",
		des: "Ilustración",
		link: "https://www.behance.net/gallery/130388913/about-illustration",
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
						<h3 style={{ color: "#e6e6e6" }}>{pro.name}</h3>
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
							<h3 style={{ color: "#e6e6e6" }}>{pro.name}</h3>
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

	const titles = ["Projects"];
	const titulos = ["Proyectos"];

	return (
		<div className="dark MixN" style={{ zIndex: "2" }}>
			<CoTitle titles={language == "EN" ? titles : titulos} />
			<div
				className="div-content-plus"
				style={{ paddingBottom: "100px", gap: "1rem" }}
			>
				<h3 style={{ color: "#e6e6e6" }}>
					{language == "EN" ? "Programming" : "Programación"}
				</h3>
				<div className="con-proj">
					<CoProCard project={language == "EN" ? proPro : proyPro} />
				</div>
				<br />
				<h3 style={{ color: "#e6e6e6" }}>Multimedia</h3>
				<div className="con-proj">
					<CoProCard project={language == "EN" ? proMult : proyMult} />
				</div>
				<br />
				<h3 style={{ color: "#e6e6e6" }}>
					{language == "EN" ? "branding & product" : "Marca y producto"}
				</h3>
				<div className="con-proj">
					<CoProCard project={language == "EN" ? proBrand : proyBrand} />
				</div>
				<br />
				<h3 style={{ color: "#e6e6e6" }}>Editorial</h3>
				<div className="con-proj">
					<CoProCard
						project={language == "EN" ? proEditorial : proyEditorial}
					/>
				</div>
				<br />
				<h3 style={{ color: "#e6e6e6" }}>
					{language == "EN" ? "Miscellaneous" : "Misceláneos"}
				</h3>
				<div className="con-proj">
					<CoProCard project={language == "EN" ? proMisc : proyMisc} />
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
