import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

import page1 from "../../assets/imgs/hubbub/userStory/userStory_Página_1.png";
import page2 from "../../assets/imgs/hubbub/userStory/userStory_Página_2.png";
import page3 from "../../assets/imgs/hubbub/userStory/userStory_Página_3.png";
import page4 from "../../assets/imgs/hubbub/userStory/userStory_Página_4.png";
import page5 from "../../assets/imgs/hubbub/userStory/userStory_Página_5.png";
import plus from "../../assets/imgs/hubbub/userStory/zoom_in.svg";
import minus from "../../assets/imgs/hubbub/userStory/zoom_out.svg";
import gallery1 from "../../assets/imgs/hubbub/bocetos/1.png";
import gallery2 from "../../assets/imgs/hubbub/bocetos/2.png";
import gallery3 from "../../assets/imgs/hubbub/bocetos/3.png";
import gallery4 from "../../assets/imgs/hubbub/bocetos/4.png";
import gallery5 from "../../assets/imgs/hubbub/bocetos/5.png";
import gallery6 from "../../assets/imgs/hubbub/bocetos/6.png";
import gallery7 from "../../assets/imgs/hubbub/bocetos/7.png";
import gallery8 from "../../assets/imgs/hubbub/bocetos/8.png";

import CoTitle from "../general/CoTitle";

const CoPDF = ({ zoom }) => {
	let pages = [page1, page2, page3, page4, page5];

	return pages.map((page) => {
		return (
			<img
				key={pages.indexOf(page)}
				className="document-page"
				style={{ width: zoom + "%" }}
				src={page}
				alt="page"
			/>
		);
	});
};

const CoDefDesign = () => {
	const { language } = useContext(MyContext);
	const [zoom, setZoom] = useState(100);

	const titles = ["Design", "definition"];
	const titulos = ["Definicióm", "de diseño"];

	function zoomAnima(plus) {
		if (window.innerWidth <= window.innerHeight * 1) {
			if (plus) {
				if (zoom < 400) {
					setZoom(zoom + 50);
				}
			} else {
				if (zoom > 100) {
					setZoom(zoom - 50);
				}
			}
		} else if (window.innerWidth <= window.innerHeight * 0.7) {
			if (plus) {
				if (zoom < 600) {
					setZoom(zoom + 100);
				}
			} else {
				if (zoom > 100) {
					setZoom(zoom - 100);
				}
			}
		} else {
			if (plus) {
				if (zoom < 200) {
					setZoom(zoom + 20);
				}
			} else {
				if (zoom > 100) {
					setZoom(zoom - 20);
				}
			}
		}
	}

	return (
		<div style={{ zIndex: "4" }}>
			<CoTitle
				titles={language == "EN" ? titles : titulos}
				space="-body"
				color="#333333"
			/>
			<div className="div-content middle-body">
				<p className="monBs-dark">
					{language == "EN"
						? "As part of the definition of experience, the first thing that was done was a series of User Stories to determine how the website would work on both levels, both in the interface comprising Front End and UI and in the Back End part with the business logic and connection with the Database."
						: "Como parte de la definición de experiencia lo primero que se hizo fueron una serie de Historias de Usuario para determinar cual es la forma en que el sitio web funcionaria en ambos niveles, tanto en la interfaz comprendiendo Front End y UI como en la parte de Back End con la lógica de negocio y conexión con Base de Datos."}
				</p>
				<div className="doc-visualizer">
					<div className="document">
						<CoPDF zoom={zoom} />
					</div>
					<div className="doc-visualizer-controls">
						<div
							className="zoom-btn clickable"
							onClick={() => zoomAnima(false)}
						>
							<img src={minus} alt="minus" />
						</div>
						<span className="zoomInput" type="text">
							{zoom + "%"}
						</span>
						<div className="zoom-btn clickable" onClick={() => zoomAnima(true)}>
							<img src={plus} alt="plus" />
						</div>
					</div>
				</div>
				<p className="monBs-dark">
					{language == "EN"
						? "Based on the user stories, the next step was the exploration and externalization of ideas, this was done first through sketches, and later with a model and prototype made in Figma where animations, interactions and sections of the site were fully determined. The sketches and figma prototype are just below."
						: "Basándose en las historias de usuario, el siguiente paso fue la exploración y exteriorización de ideas, esto se realizado primeramente a través de sketches, y posteriormente con una maqueta y prototipo hecho en Figma donde se determino por completo animaciones, interacciones y secciones del sitio. Los bocetos y prototipo de figma se encuentran justo abajo."}
				</p>
				<div className="gallery-niv1">
					<div className="gallery-niv2_1">
						<img src={gallery1} alt="" />
						<div className="gallery-niv3">
							<div className="gallery-niv4">
								<img src={gallery2} alt="" />
								<img src={gallery3} alt="" />
							</div>
							<div className="gallery-niv4">
								<img src={gallery4} alt="" />
								<img src={gallery5} alt="" />
							</div>
						</div>
					</div>
					<div className="gallery-niv2_2">
						<img src={gallery6} alt="" />
						<img src={gallery7} alt="" />
						<img src={gallery8} alt="" />
					</div>
				</div>
				<iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDCKDjbG9VOColuADoF4xsS%2FHUBBUB%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DCLIE0yyHuxS5nTHC-1" allowFullScreen></iframe>
			</div>
		</div>
	);
};

export default CoDefDesign;
