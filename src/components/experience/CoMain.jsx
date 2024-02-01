import CoTitle from "../general/CoTitle";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import kashmir from "../../assets/imgs/bitmap/projects/Bkashmir.webp";
import hollow from "../../assets/imgs/bitmap/projects/Bhollow.webp";
import spirukit from "../../assets/imgs/bitmap/projects/Bspiru.webp";
import monarch from "../../assets/imgs/bitmap/projects/Bmonarch.webp";
import apoco from "../../assets/imgs/bitmap/projects/Bapoco.webp";
import barrio from "../../assets/imgs/bitmap/projects/Bpahablar.webp";
import about from "../../assets/imgs/bitmap/projects/Billu.webp";
import aleph from "../../assets/imgs/bitmap/projects/Baleph.webp";
import nhoro from "../../assets/imgs/bitmap/projects/Bnhoro.webp";
import wireframes from "../../assets/imgs/bitmap/projects/Bwire.webp";

let proMain = [
	{
		id: 1,
		name: "Kashmir",
		img: kashmir,
		date: "(august 2021 - november 2021)",
		des: "Branding & product design for a HiFi audio company",
		link: "https://www.behance.net/gallery/124647895/Kashmir",
	},
	{
		id: 2,
		name: "Hollowknight",
		img: hollow,
		date: "(june 2021 - september 2021)",
		des: "Infographic of one of the best metroid-vanias of the time",
		link: "https://www.behance.net/gallery/162885415/Hollowknight-Infography",
	},
	{
		id: 3,
		name: "Spirukit",
		img: spirukit,
		date: "(february 2021 - february 2022)",
		des: "Brand image, manuals and presentation for a Bio-food startup",
		link: "https://www.behance.net/gallery/125298483/Spiru-Kit-Fresh-Spirulina",
	},
	{
		id: 4,
		name: "Monarch",
		img: monarch,
		date: "(january 2021 - april 2021)",
		des: "Branding and image for a design company",
		link: "https://www.behance.net/gallery/165169467/MONARCH",
	},
	{
		id: 5,
		name: "¿Apoco sí?",
		img: apoco,
		date: "(december 2020 - august 2021)",
		des: "Packaging and branding for a board game",
		link: "https://www.behance.net/gallery/124701913/Apoco-si",
	},
	{
		id: 6,
		name: "Pa' hablar barrio",
		img: barrio,
		date: "(december 2020 - august 2021)",
		des: "Packaging and branding for a utopian product",
		link: "https://www.behance.net/gallery/124718727/Pa-Hablar-Barrio",
	},
	{
		id: 7,
		name: "About Illustration",
		img: about,
		date: "(september 2020 - november 2020)",
		des: "Excercise of illustration in different styles",
		link: "https://www.behance.net/gallery/130388913/about-illustration",
	},
    {
		id: 8,
		name: "Wireframes",
		img: wireframes,
		date: "(august 2020)",
		des: "Wireframes & mockup of different apps",
		link: "https://www.behance.net/gallery/125290739/Wireframes",
	},
	{
		id: 9,
		name: "Nhoro",
		img: nhoro,
		date: "(june 2020 - january 2021)",
		des: "Editorial design for a magazine",
		link: "https://www.behance.net/gallery/124633193/nhr",
	},
    {
		id: 10,
		name: "Aleph",
		img: aleph,
		date: "(may 2020 - july 2022)",
		des: "Branding and edition for a History & philosophy podcast",
		link: "https://www.behance.net/gallery/121921673/aleph-podcast",
	},
];
let proyMain = [
	{
		id: 1,
		name: "Kashmir",
		img: kashmir,
		date: "(agosto 2021 - noviembre 2021)",
		des: "Branding y diseño de producto para compañía de audio HiFi",
		link: "https://www.behance.net/gallery/124647895/Kashmir",
	},
	{
		id: 2,
		name: "Hollowknight",
		img: hollow,
		date: "(junio 2021 - septiembre 2021)",
		des: "Infografía de uno de los mejores metroid-vanias de la época",
		link: "https://www.behance.net/gallery/162885415/Hollowknight-Infography",
	},
	{
		id: 3,
		name: "Spirukit",
		img: spirukit,
		date: "(febrero 2021 - febrero 2022)",
		des: "Imagen de marca, manuales y presentación para una startup Bio-alimenticia",
		link: "https://www.behance.net/gallery/125298483/Spiru-Kit-Fresh-Spirulina",
	},
	{
		id: 4,
		name: "Monarch",
		img: monarch,
		date: "(enero 2021 - abril 2021)",
		des: "Branding e imagen para una compañía de diseño",
		link: "https://www.behance.net/gallery/165169467/MONARCH",
	},
	{
		id: 5,
		name: "¿Apoco sí?",
		img: apoco,
		date: "(diciembre 2020 - agosto 2021)",
		des: "Packaging y branding para un juego de mesa",
		link: "https://www.behance.net/gallery/124701913/Apoco-si",
	},
	{
		id: 6,
		name: "Pa' hablar barrio",
		img: barrio,
		date: "(diciembre 2020 - agosto 2021)",
		des: "Packaging y branding para un producto utópico",
		link: "https://www.behance.net/gallery/124718727/Pa-Hablar-Barrio",
	},
	{
		id: 7,
		name: "About Illustration",
		img: about,
		date: "(septiembre 2020 - noviembre 2020)",
		des: "Ejercicio de ilustración en diferentes estilos",
		link: "https://www.behance.net/gallery/130388913/about-illustration",
	},
	{
		id: 8,
		name: "Wireframes",
		img: wireframes,
		date: "(agosto 2020)",
		des: "Wireframes y mockup de diferentes apps",
		link: "https://www.behance.net/gallery/125290739/Wireframes",
	},
	{
		id: 9,
		name: "Nhoro",
		img: nhoro,
		date: "(junio 2020 - enero 2021)",
		des: "Diseño editorial para una revista",
		link: "https://www.behance.net/gallery/124633193/nhr",
	},
	{
		id: 10,
		name: "Aleph",
		img: aleph,
		date: "(mayo 2020 - julio 2022)",
		des: "Podcast de historia y filosofía",
		link: "https://www.behance.net/gallery/121921673/aleph-podcast",
	},
];

const CoCardCopa = ({ casos }) => {
	return casos.map((caso) => {
		return (
			<a key={caso.id} href={caso.link} target="_blank" rel="noreferrer">
				<div className="mproj-card">
					<img loading="lazy" src={caso.img} alt={caso.name} />
					<div className="mproj-card-info">
						<div>
							<h4>{caso.name}</h4>
							<p className="mproj-card-info-date">{caso.date}</p>
						</div>
						<p className="mproj-card-info-desc">{caso.des}</p>
					</div>
				</div>
			</a>
		);
	});
};

const CoMain = () => {
	const { language } = useContext(MyContext);

	const titles = ["Main", "Projects"];
	const titulos = ["Proyectos", "Principales"];

	return (
		<div className="MixN" style={{ zIndex: "2" }}>
			<CoTitle titles={language == "EN" ? titles : titulos} />
			<div
				className="div-content-plus"
				style={{ paddingBottom: "100px", gap: "1rem" }}
			>
				<div className="cont-jobs-sec">
					<CoCardCopa casos={language == "EN" ? proMain : proyMain} />
				</div>
			</div>
		</div>
	);
};

export default CoMain;
