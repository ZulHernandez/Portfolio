import { useContext } from "react";
import { MyContext } from "../context/MyContext";

//* Función para hacer scroll a un anchor
function scrollAnchor(anchor) {
	window.location.href = "#" + anchor;
}

//* Componente de navegación izquierdo
const CoLeftNav = () => {
	//* Evaluamos la posición y hacemos scroll
	const { posicion, setPosicion } = useContext(MyContext);

	switch (posicion) {
		case 1:
			scrollAnchor("about-me");
			break;
		case 2:
			scrollAnchor("studies-courses");
			break;
		case 3:
			scrollAnchor("experience-projects");
			break;
		case 4:
			scrollAnchor("get-in-touch");
			break;
		default:
			break;
	}

	return (
		<div className="nav-left">
			<span
				onClick={() => setPosicion(1)}
				className="nav-link-inactive nav-link clickable"
			>
				about me
			</span>
			<span
				onClick={() => setPosicion(2)}
				className="nav-link-inactive nav-link clickable"
			>
				studies &<br />
				courses
			</span>
			<span
				onClick={() => setPosicion(3)}
				className="nav-link-inactive nav-link clickable"
			>
				experience &<br />
				projects
			</span>
			<span
				onClick={() => setPosicion(4)}
				className="nav-link-inactive nav-link clickable"
			>
				get in touch
			</span>
		</div>
	);
};

export default CoLeftNav;
