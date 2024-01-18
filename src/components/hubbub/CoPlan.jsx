import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import pasos from "../../assets/imgs/hubbub/pasos/planeacion.gif";
import steps from "../../assets/imgs/hubbub/pasos/planning.gif";
import avance from "../../assets/imgs/hubbub/pasos/avance.gif";
import ongoin from "../../assets/imgs/hubbub/pasos/ongoin.gif";

import CoTitle from "../general/CoTitle";

const CoPlan = () => {
	const { language } = useContext(MyContext);

	const titles = ["Planning"];
	const titulos = ["Planeación"];

	return (
		<div style={{ zIndex: "3" }}>
			<CoTitle
				titles={language == "EN" ? titles : titulos}
				space="-body"
				color="#333333"
			/>
			<div className="div-content middle-body">
				<p className="monBs-dark">
					{language == "EN"
						? "To solve the time management with which the project had, it was decided to use scrum to, in this way, focus on continuous deliveries and reviews, together with the possibility of iterations with the client. The planning was as follows."
						: "Para resolver la administración del tiempo con el que contaba el proyecto se decidió el uso de scrum para, de esta forma, centrarnos en las entregas y revisiones continuas aunadas a la posibilidad de iteraciones con el cliente. La planeación quedo del siguiente modo."}
				</p>
				<img loading="lazy" src={language == "EN" ? steps : pasos} alt="HUBBUB" style={{ width: "100%" }} />
				<img loading="lazy" src={language == "EN" ? ongoin : avance } alt="HUBBUB" style={{ width: "100%" }} />
			</div>
		</div>
	);
};

export default CoPlan;
