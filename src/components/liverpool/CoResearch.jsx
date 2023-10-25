import CoTitle from "../general/CoTitle";
import CoInfoCard from "../general/CoInfoCard";

import maze from "../../assets/imgs/liverpool/maze.svg";
import analytics from "../../assets/imgs/liverpool/analytics.svg";
import baymard from "../../assets/imgs/liverpool/baymard.svg";

import { useContext } from "react";
import { MyContext } from "../context/MyContext";

let resTech = [
	{
		id: 1,
		icon: maze,
		description:
			"Creation of surveys and manipulation tests of prototypes with a first-hand approach.",
	},
	{
		id: 2,
		icon: analytics,
		description:
			"Collection of statistics related to the web products of the different Liverpool businesses.",
	},
	{
		id: 3,
		icon: baymard,
		description:
			"Consultation of specialized data in e-commerce and various services for world-class best practices.",
	},
];
let resTecn = [
	{
		id: 1,
		icon: maze,
		description:
			"Creación de encuestas y pruebas de manipulación de prototipos con un enfoque de primera mano.",
	},
	{
		id: 2,
		icon: analytics,
		description:
			"Recopilación de estadísticas relacionadas con los productos web de los diferentes negocios de Liverpool.",
	},
	{
		id: 3,
		icon: baymard,
		description:
			"Consulta de datos especializados en e-commerce y diversos servicios para mejores prácticas de clase mundial.",
	},
];

const CoResearch = () => {
	const { language } = useContext(MyContext);
	const titles = ["Research"];
	const titulos = ["Investigación"];

	return (
		<div className="MixN" style={{ zIndex: "3" }}>
			<CoTitle titles={language == "EN" ? titles : titulos} space="-body" />
			<div className="div-content middle-body darkLiver">
				<p className="monBs">
					{language == "EN"
						? "As a fundamental part of creating experience and interface solutions, the approach to the language and behavior of users is extremely important. For this, we make use of various sources of information that we integrate into our project life cycle. The presentation of these insights and information to stakeholders is key in defining flows. These are the tools we use:"
						: "Como parte fundamental de la creación de soluciones de experiencia e interfaz, el acercamiento al lenguaje y comportamiento de los usuarios es sumamente importante. Para esto, hacemos uso de diversas fuentes de información que integramos a nuestro ciclo de vida de proyectos. La presentación de estos insights e información a los stakeholders es clave en la definición de flujos. Estas son las herramientas que utilizamos:"}
				</p>
				<div className="cont-info">
					<CoInfoCard data={language == "EN" ? resTech : resTecn} title="none" />
				</div>
				<p className="monBs">
					{language == "EN"
						? "From this, different types of files, documents or formats are created for the presentation of these results. Thanks to documentation such as benchmarks, data visualizers, user journeys and even flow diagrams, they end up consolidating the UX and UI guides within the projects."
						: "A partir de esto, se crean diferentes tipos de archivos, documentos o formatos para la presentación de estos resultados. Gracias a documentación como benchmarks, visualizadores de datos, user journeys e incluso diagramas de flujo, terminan por consolidarse las guías UX y UI dentro de los proyectos."}
				</p>
			</div>
		</div>
	);
};
export default CoResearch;
