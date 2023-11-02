import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { useState } from "react";

import arrow from "../../assets/imgs/vector/arrow.svg";
import CoTitle from "../general/CoTitle";

let stepsMacro = [
	{
		id: 1,
		title: "1. Research",
		description:
			"Analysis of the problem, generation and understanding of concepts, and research of users and projects.",
	},
	{
		id: 2,
		title: "2. Design",
		description:
			"Definition of proposals and graphic identity. Ideas and project prototypes are also sketched.",
	},
	{
		id: 3,
		title: "3. Programming",
		description:
			"Execution of the plan, coding, implementation, and evaluation of the project.",
	},
];
let pasosMacro = [
	{
		id: 1,
		title: "1. Investigación",
		description:
			"Análisis del problema, generación y entendimiento de conceptos e investigación de ususarios y proyectos.",
	},
	{
		id: 2,
		title: "2. Diseño",
		description:
			"Definición de propuestas e identidad gráfica. También se bocetan ideas y prototipos del proyecto.",
	},
	{
		id: 3,
		title: "3. Programación",
		description:
			"Ejecución del plan, codificación, ejecución y evaluación del proyecto.",
	},
];

let stepsMicro0 = [
	{
		id: 1,
		class: "paso1",
		title: "a) Analysis",
		description:
			"Recognition of problems and objectives of HUBBUB. Delimitation of topics to be taken into account.",
	},
	{
		id: 2,
		class: "paso1",
		title: "b) Concepts",
		description:
			"Research on noise and data visualization. Integration of user-centered design (concepts, theorems and philosophy)",
	},
	{
		id: 3,
		class: "paso1",
		title: "c) Research",
		description: "Research of users, paradigms and benchmarks",
	},
];
let pasosMicro0 = [
	{
		id: 1,
		class: "paso1",
		title: "a) Análisis",
		description:
			"Reconocimiento de problemas y objetivos de HUBBUB. Delimitación de temas a tomar en cuenta.",
	},
	{
		id: 2,
		class: "paso1",
		title: "b) Conceptos",
		description:
			"Investigación sobre el ruido y visualización de datos. Integración del diseño centrado en el usuario (conceptos, teorémas y filosofía)",
	},
	{
		id: 1,
		class: "paso1",
		title: "c) Investigación",
		description: "Investigación de usuario, paradigmas y benchmarks",
	},
];

let stepsMicro1 = [
	{
		id: 1,
		class: "paso2",
		title: "a) HUBBUB",
		description: "Understanding of HUBBUB's graphic identity and objectives.",
	},
	{
		id: 2,
		class: "paso2",
		title: "b) Sketching",
		description:
			"Process of sketching, externalization of ideas and exploration of visualizers.",
	},
	{
		id: 3,
		class: "paso2",
		title: "c) Prototipado",
		description:
			"Refinement of ideas, creation of experiences and exploration of UI",
	},
];
let pasosMicro1 = [
	{
		id: 1,
		class: "paso2",
		title: "a) HUBBUB",
		description:
			"Entendimiento de la identidad gráfica de HUBBUB y sus objetivos.",
	},
	{
		id: 2,
		class: "paso2",
		title: "b) Sketching",
		description:
			"Proceso de bocetaje, exteriorización de ideas y exploración de visualizadores.",
	},
	{
		id: 3,
		class: "paso2",
		title: "c) Prototipado",
		description:
			"Refinamiento de ideas, creación de experiencias y exploración de UI",
	},
];

let stepsMicro2 = [
	{
		id: 1,
		class: "paso3",
		title: "a) Planning",
		description:
			"Definition of modules, time planning and selection of technologies",
	},
	{
		id: 2,
		class: "paso3",
		title: "b) Coding",
		description:
			"Programming of functionalities, experience and styles. The connection to the database is also included.",
	},
	{
		id: 3,
		class: "paso3",
		title: "c) Results",
		description: "Execution and evaluation for improvements.",
	},
];
let pasosMicro2 = [
	{
		id: 1,
		class: "paso3",
		title: "a) Planificación",
		description:
			"Definiciónde modulos, planificación del tiempo y selección de tecnologías",
	},
	{
		id: 2,
		class: "paso3",
		title: "b) Codificación",
		description:
			"Programación de funcionalidades, experiencia y estílos. La conección a base de datos tambien se incluye.",
	},
	{
		id: 3,
		class: "paso3",
		title: "c) Resultados",
		description: "Ejecución y evaluación para mejoras.",
	},
];

const CoSubSteps = ({ subStep }) => {
	return subStep.map((step) => {
		return (
			<div id={step.class} className="microstep-card" key={step.id}>
				<h4 className="microstep-card-title">{step.title}</h4>
				<p className="microstep-card-description">{step.description}</p>
			</div>
		);
	});
};

const CoSteps = ({ step, opacidad }) => {
	return (
		<div
			id={"paso" + step.id}
			className={"step-card " + opacidad}
			key={step.id}
		>
			<h3 className="step-card-title">{step.title}</h3>
			<p className="step-card-description">{step.description}</p>
		</div>
	);
};

const CoPuesto = () => {
	const { language } = useContext(MyContext);
	const [step, setStep] = useState(0);

	const titles = ["Role &", "Activities"];
	const titulos = ["Puesto y", "Actividades"];

	let array;
	if (step == 0) {
		language == "EN" ? (array = stepsMicro0) : (array = pasosMicro0);
	} else if (step == 1) {
		language == "EN" ? (array = stepsMicro1) : (array = pasosMicro1);
	} else if (step == 2) {
		language == "EN" ? (array = stepsMicro2) : (array = pasosMicro2);
	}

	return (
		<div style={{ zIndex: "2" }}>
			<CoTitle
				titles={language == "EN" ? titles : titulos}
				space="-body"
				color="#333333"
			/>
			<div className="div-content middle-body">
				<p className="monBs-dark">
					{language == "EN"
						? "HUBBUB is a project carried out by the Acoustic Design Department of UAM, whose objective is the collection of qualitative and quantitative data related to the phenomena of noise within Mexico City. My job within the project is the creation of a website where the different data collected through their mobile application can be released; these data need to find a medium through which they can be communicated to society and encourage knowledge of the phenomenon."
						: "HUBBUB es un proyecto realizado por el Departamento de Diseño Acústico de la UAM, cuyo objetivo es la recolección de datos cualitativos y cuantitativos relacionados con los fenómenos de ruido dentro de la Ciudad de México. Mi trabajo dentro del proyecto es la creación de un sitio web donde se puedan liberar los diferentes datos recolectados a través de su aplicación móvil; estos datos necesitan encontrar un medio a través del cual puedan ser comunicados a la sociedad y fomentar el conocimiento del fenómeno."}
				</p>
				<p className="monBs-dark">
					{language == "EN"
						? "The responsibilities within this project fall from the research and determination of the project's scope argued in functional and non-functional requirements, through the design process and determination of graphic communication, to the development and programming of the system. At the same time, each of these macro-stages has specific tasks that allow you to advance little by little in the development of the project."
						: "Las responsabilidades dentro de este proyecto recaen desde la investigación y determinación de alcances del proyecto argumentado en requerimientos funcionales y no funcionales, pasando por el proceso de diseño y determinación de comunicación gráfica, hasta el desarrollo y programación edl sistema. Al mismo tiempo, cada una de estas macroetapas posee tareas especificas que permiten avanzar poco a poco en el desarrollo del proyecto."}
				</p>
				<div className="cont-step">
					<div>
						<img
							style={{ transform: "rotate(-90deg)", margin: "5rem 0 0 0" }}
							className="cont-brands-arrow clickable"
							src={arrow}
							onClick={() => {
								setStep(step > 0 ? step - 1 : 2);
							}}
						/>
					</div>
					<CoSteps
						step={language == "EN" ? stepsMacro[0] : pasosMacro[0]}
						opacidad={step == 0 ? "selected" : "noneselected"}
					/>
					<CoSteps
						step={language == "EN" ? stepsMacro[1] : pasosMacro[1]}
						opacidad={step == 1 ? "selected" : "noneselected"}
					/>
					<CoSteps
						step={language == "EN" ? stepsMacro[2] : pasosMacro[2]}
						opacidad={step == 2 ? "selected" : "noneselected"}
					/>
					<img
						style={{ transform: "rotate(90deg)", margin: "5rem 0 0 0" }}
						className="cont-brands-arrow clickable"
						src={arrow}
						onClick={() => {
							setStep(step < 2 ? step + 1 : 0);
						}}
					/>
				</div>
				<div className="cont-substep">
					<CoSubSteps subStep={array} />
				</div>
			</div>
		</div>
	);
};

export default CoPuesto;
