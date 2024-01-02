import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import CoTitle from "../general/CoTitle";
import CoInfoCard from "../general/CoInfoCard";

import chat from "../../assets/imgs/gook/steps/chat.svg";
import code from "../../assets/imgs/gook/steps/code.svg";
import design from "../../assets/imgs/gook/steps/design.svg";
import investigation from "../../assets/imgs/gook/steps/investigation.svg";
import prototype from "../../assets/imgs/gook/steps/prototype.svg";
import research from "../../assets/imgs/gook/steps/research.svg";

const CoPuesto = () => {
	let pasos = [
		{
			id: 1,
			title: "1. Requerimientos",
			description: "Bajada de requerimientos funcionales y no funcionales",
			icon: investigation,
		},
		{
			id: 2,
			title: "2. Investigación",
			description:
				"Recopilación de estándares en la industria, buenas prácticas y experiencia",
			icon: research,
		},
		{
			id: 3,
			title: "3. Diseño",
			description:
				"Determinación de UI y diseño de UX en Adobe XD y test de interfaz con usuarios",
			icon: design,
		},
		{
			id: 4,
			title: "4. Comunicación",
			description:
				"Se mantiene una comunicación constante con el cliente para informar avances y revisiones",
			icon: chat,
		},
		{
			id: 5,
			title: "5. Programación",
			description:
				"Desarrollo de back-end, front-end y BD para el sistema completo",
			icon: code,
		},
		{
			id: 6,
			title: "6. Test y seguimiento",
			description: "Mejora continua de UI, UX y servicios post-entrega",
			icon: prototype,
		},
	];

	let steps = [
		{
			id: 1,
			title: "1. Requirements",
			description: "Functional and non-functional requirements",
			icon: investigation,
		},
		{
			id: 2,
			title: "2. Research",
			description:
				"Collection of industry standards, best practices and experience",
			icon: research,
		},
		{
			id: 3,
			title: "3. Design",
			description:
				"Determination of UI and UX design in Adobe XD and interface testing with users",
			icon: design,
		},
		{
			id: 4,
			title: "4. Communication",
			description:
				"Constant communication is maintained with the client to inform progress and revisions",
			icon: chat,
		},
		{
			id: 5,
			title: "5. Programming",
			description:
				"Development of back-end, front-end and DB for the complete system",
			icon: code,
		},
		{
			id: 6,
			title: "6. Testing and monitoring",
			description:
				"Continuous improvement of UI, UX and post-delivery services",
			icon: prototype,
		},
	];

	const { language } = useContext(MyContext);

	const titles = ["Role &", "Activities"];
	const titulos = ["Puesto y", "Actividades"];

	return (
		<div style={{ zIndex: "2" }}>
			<CoTitle
				titles={language == "EN" ? titles : titulos}
				space="-body"
				color="#333333"
			/>
			<div className="div-content middle-body">
				<div>
					<p className="monBs-dark">
						{language == "EN"
							? "Gook is an e-commerce dedicated to the sale of products for visual health where, its main product is graduated lenses with special treatment for the lenses."
							: "Gook es un e-commerce dedicado a la venta de productos para la salud visual donde, su principal producto son los lentes graduados con tratamiento especial para las micas."}
					</p>
					<p className="monBs-dark">
						{language == "EN"
							? "As a SaaS-type project, the requirements and design definitions came from direct approaches with the optical employees in the first place. Just like this step, the project was divided into the following phases for its creation."
							: "Como un proyecto tipo SaaS, la bajada de requerimientos y definiciones de diseño partieron de acercamientos directos con lso empleados de la óptica en un primer lugar. Así como este paso. el proyecto se dividió en las siguientes fases para su creación:"}
					</p>
				</div>
				<div className="cont-pasos">
					<CoInfoCard data={language == "EN" ? steps : pasos} title={"block"} />
				</div>
			</div>
		</div>
	);
};

export default CoPuesto;
