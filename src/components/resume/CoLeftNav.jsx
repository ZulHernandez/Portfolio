import { useContext } from "react";
import { MyContext } from "../context/MyContext";

//* Función para hacer scroll a un anchor
function scrollAnchor(anchor) {
	window.location.href = "#" + anchor;
}

//* Componente de navegación izquierdo
const CoLeftNav = () => {
	//* Evaluamos la posición y hacemos scroll
	const { posicion, setPosicion, language } = useContext(MyContext);

	let posiciones = [
		"about-me",
		"studies-courses",
		"experience-projects",
		"get-in-touch",
		"sobre-mi",
		"estudios-cursos",
		"experiencia-proyectos",
		"contactame",
	];

	switch (posicion) {
		case 1:
			scrollAnchor(posiciones[language == "EN" ? 0 : 4]);
			break;
		case 2:
			scrollAnchor(posiciones[language == "EN" ? 1 : 5]);
			break;
		case 3:
			scrollAnchor(posiciones[language == "EN" ? 2 : 6]);
			break;
		case 4:
			scrollAnchor(posiciones[language == "EN" ? 3 : 7]);
			break;
		default:
			break;
	}

	let options = [
		"about me",
		"studies &\n courses",
		"experience &\n projects",
		"get in touch",
		"sobre mi",
		"estudios y\n cursos",
		"experiencia y\n proyectos",
		"Contáctame",
	];

	return (
		<div className="nav-left">
			<span
				onClick={() => setPosicion(1)}
				className="nav-link-inactive nav-link clickable"
			>
				{options[language == "EN" ? 0 : 4]}
			</span>
			<span
				onClick={() => setPosicion(2)}
				className="nav-link-inactive nav-link clickable"
			>
				{options[language == "EN" ? 1 : 5]}
			</span>
			<span
				onClick={() => setPosicion(3)}
				className="nav-link-inactive nav-link clickable"
			>
				{options[language == "EN" ? 2 : 6]}
			</span>
			<span
				onClick={() => setPosicion(4)}
				className="nav-link-inactive nav-link clickable"
			>
				{options[language == "EN" ? 3 : 7]}
			</span>
		</div>
	);
};

export default CoLeftNav;
