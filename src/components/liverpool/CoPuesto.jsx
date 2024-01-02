import CoInfoCard from "../general/CoInfoCard";
import CoTitle from "../general/CoTitle";

import research from "../../assets/imgs/liverpool/research.svg";
import framework from "../../assets/imgs/liverpool/framework.svg";
import design from "../../assets/imgs/liverpool/design.svg";
import prototype from "../../assets/imgs/liverpool/prototype.svg";
import code from "../../assets/imgs/liverpool/code.svg";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

let actFocus = [
	{
		id: 1,
		icon: research,
		title: "Research",
		description: "User-centered research and testing for insight gathering.",
	},
	{
		id: 2,
		icon: framework,
		title: "Framework",
		description:
			"Maintenance and use of proprietary design libraries and frameworks.",
	},
	{
		id: 3,
		icon: design,
		title: "UI Design",
		description:
			"Creation of graphic solutions for interfaces of different kinds.",
	},
	{
		id: 4,
		icon: prototype,
		title: "UX prototype",
		description:
			"Presentation of user journeys and flows in interactive screens.",
	},
	{
		id: 5,
		icon: code,
		title: "Engineering",
		description:
			"Creation and maintenance of tokens, as well as implementation of design variables and APIs.",
	},
];
let actEnfoque = [
	{
		id: 1,
		icon: research,
		title: "Investigación",
		description:
			"Investigación y test centrados en el usuario para la obtención de conclusiones.",
	},
	{
		id: 2,
		icon: framework,
		title: "Framework",
		description:
			"Mantenimiento y uso de librerías y frameworks de diseño propietarios.",
	},
	{
		id: 3,
		icon: design,
		title: "Diseño UI",
		description:
			"Creación de soluciones gráficas para interfaces de diferentes tipos.",
	},
	{
		id: 4,
		icon: prototype,
		title: "UX prototype",
		description:
			"Presentación de flujos y recorridos de usuario en pantallas interactivas.",
	},
	{
		id: 5,
		icon: code,
		title: "Ingeniería",
		description:
			"Creación y mantenimiento de tokens, así como implementación de variables y APIs de diseño.",
	},
];

const CoPuesto = () => {
	const { language } = useContext(MyContext);

	const titles = ["Role &", "Activities"];
	const titulos = ["Puesto y", "Actividades"];
	return (
		<div style={{ zIndex: "2" }}>
			<CoTitle
				titles={language == "EN" ? titles : titulos}
				space="-body"
				color="#833177"
			/>
			<div className="div-content middle-body">
				<p className="monBs-dark">
					{language == "EN"
						? "Given the magnitude and complexity of the projects within Liverpool, my activities as a Senior UI/UX designer were mainly focused on the following five points:"
						: "Dada la magnitud y complejidad de los proyectos dentro de Liverpool, mis actividades como Senior UI/UX designer se enfocaron principalmente en los siguientes cinco puntos:"}
				</p>
				<div className="cont-info">
					<CoInfoCard data={language == "EN" ? actFocus : actEnfoque} />
				</div>
				<p className="monBs-dark">
					{language == "EN"
						? "Each of the activities described above are elaborated on in the rest of the information further down the page."
						: "Cada una de las actividades descritas anteriormente se desarrollan en el resto de la información más abajo en la página."}
				</p>
			</div>
		</div>
	);
};

export default CoPuesto;
