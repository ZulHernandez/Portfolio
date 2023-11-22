import CoTitle from "../general/CoTitle";
import CoInfoCard from "../general/CoInfoCard";

import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import github from "../../assets/imgs/hubbub/tools/GitHub.svg";
import visual from "../../assets/imgs/hubbub/tools/VisualStudio.svg";
import miro from "../../assets/imgs/hubbub/tools/Miro.svg";
import builder from "../../assets/imgs/hubbub/tools/3Dbuilder.svg";
import adobe from "../../assets/imgs/hubbub/tools/Adobe.svg";
import figma from "../../assets/imgs/hubbub/tools/Figma.svg";
import javascript from "../../assets/imgs/hubbub/tools/JavaScript.svg";
import npm from "../../assets/imgs/hubbub/tools/Npm.svg";
import node from "../../assets/imgs/hubbub/tools/Node.svg";
import sass from "../../assets/imgs/hubbub/tools/Sass.svg";

const CoTools = () => {
	const { language } = useContext(MyContext);
	const titles = ["Development", "& design tools"];
	const titulos = ["Herramientas", "de desarrollo", "y diseño"];

	let adminProyecto = [
		{
			id: 1,
			icon: github,
			title: "GitHub",
			description:
				"Se utilizo como repositorio y medio de publicación para el proyecto",
		},
		{
			id: 2,
			icon: visual,
			title: "Visual Studio Code",
			description: "IDE desde el cuál se administro y codifico todo el sistema",
		},
		{
			id: 3,
			icon: miro,
			title: "Miro",
			description:
				"Espacio desde el cual se comunicacban y administraban los sprints del proyecto",
		},
	];

	let adminProject = [
		{
			id: 1,
			icon: github,
			title: "GitHub",
			description:
				"Used as a repository and publication medium for the project",
		},
		{
			id: 2,
			icon: visual,
			title: "Visual Studio Code",
			description:
				"IDE from which the entire system was administered and coded",
		},
		{
			id: 3,
			icon: miro,
			title: "Miro",
			description:
				"Space from which the sprints of the project were communicated and administered",
		},
	];

	let disenoTools = [
		{
			id: 1,
			icon: builder,
			title: "3D Builder",
			description:
				"Ayudo en la creación de los modelos 3D utilizados dentro de la interfaz",
		},
		{
			id: 2,
			icon: adobe,
			title: "Adobe Creative Cloud",
			description:
				"Se utilizaron para animaciones, texturizado, vectores, bit-maps, audio y rebelado digital",
		},
		{
			id: 3,
			icon: figma,
			title: "Figma",
			description:
				"Espacio desde el cual se comunicacban y administraban los sprints del proyecto",
		},
	];

	let designTools = [
		{
			id: 1,
			icon: builder,
			title: "3D Builder",
			description:
				"It helped in the creation of the 3D models used within the interface",
		},
		{
			id: 2,
			icon: adobe,
			title: "Adobe Creative Cloud",
			description:
			"Used for animations, texturing, vectors, bit-maps, audio and digital rebellion",
		},
		{
			id: 3,
			icon: figma,
			title: "Figma",
			description:
			"Space from which the sprints of the project were communicated and administered",
		},
	];

	let prograTools = [
		{
			id: 1,
			icon: javascript,
			title: "Java Script",
			description:
				"Utilizadas diferentes librerias para animaciones, manejo de DOMs, gráficas, 3D, modales y crawlers",
		},
		{
			id: 2,
			icon: npm,
			title: "NPM",
			description:
				"Herramienta con la que se administraron todas las librerias de Js utilizádas en el sistema",
		},
		{
			id: 3,
			icon: node,
			title: "NODE",
			description:
				"Creación de servidores, gestión y ejecución de scripts para el sistema",
		},
		{
			id: 4,
			icon: sass,
			title: "SASS",
			description:
				"Definición de interfaz del sistema usando material para iconos, bootstrap como framework y Sass",
		},
	];

	let devTools = [
		{
			id: 1,
			icon: javascript,
			title: "Java Script",
			description:
				"Used of different libraries for animations, DOMs management, graphics, 3D, modals and crawlers",
		},
		{
			id: 2,
			icon: npm,
			title: "NPM",
			description:
				"Tool with which all the Js libraries used in the system were administered",
		},
		{
			id: 3,
			icon: node,
			title: "NODE",
			description:
			"Creation of servers, management and execution of scripts for the system",
		},
		{
			id: 4,
			icon: sass,
			title: "SASS",
			description:
				"Definition of the system interface using material for icons, bootstrap as a framework and Sass",
		},
	];

	return (
		<div className="MixN" style={{ zIndex: "3" }}>
			<CoTitle titles={language == "EN" ? titles : titulos} space="-body" />
			<div className="div-content middle-body darkHubbub">
				<p className="monBs">
					{language == "EN"
						? "Once the design and experience definition stage was finished, the stage of selection of tools began from the graphic design section and also in the development from the programming side."
						: "Una vez terminada la etapa de diseño y definición de experiencia se comenzó con la etapa de selección de herramientas desde el apartado de diseño gráfico y tambien en el desarrollo desde el lado de programación."}
				</p>
				<div>
					<h3 style={{ textAlign: "Left" }}>
						{language == "EN"
							? "Project managment"
							: "Administracón de proyectos"}
					</h3>
					<p className="monBs">
						{language == "EN"
							? "Among the things that were desired to be administered from this project are: versioning and storage of the project, coding and handling of code and assets and finally the communication of improvements and deliveries in each sprint."
							: "Entre las cosas que se deseaban administrar de este proyecto son: versionamiento y almacenamiento del proyecto, codificación y manejo del código y assets y por último la comunicación de mejoras y entregas en cada sprint."}
					</p>
				</div>
				<div className="cont-devtools">
					<CoInfoCard
						data={language == "EN" ? adminProject : adminProyecto}
						title="block"
						size="mini-"
					/>
				</div>
				<div>
					<h3 style={{ textAlign: "Left" }}>
						{language == "EN" ? "Design tools" : "Herramientas de diseño"}
					</h3>
					<p className="monBs">
						{language == "EN"
							? "Within the design tools we refer to what involved the creation of all the graphic elements that would be used in the system and that would already be pre-rendered."
							: "Dentro de las herramientas de diseño nos referimos a lo que involucro creación de todos los elementos gráficos que serían utilizados en el sistema y que ya serían pre-renderizados."}
					</p>
				</div>
				<div className="cont-devtools">
					<CoInfoCard
						data={language == "EN" ? designTools : disenoTools}
						title="block"
						size="mini-"
					/>
				</div>
				<div>
					<h3 style={{ textAlign: "Left" }}>
						{language == "EN" ? "Development tools" : "Herramientas de programación"}
					</h3>
					<p className="monBs">
						{language == "EN"
							? "Here we divide the tools into four, those related to UX within the front, styles and aesthetics of the system, administration of packages and libraries and finally the technology of connection with the database."
							: "Acá dividimos las herramientas en cuatro, aquellas relacionadas con UX dentro del front, estilos y estética del sistema, administración de paquetes y librerías y por último la tecnología de conexión con base de datos."}
					</p>
				</div>
				<div className="cont-devtools">
					<CoInfoCard
						data={language == "EN" ? devTools : prograTools}
						title="block"
						size="mini-"
					/>
				</div>
			</div>
		</div>
	);
};

export default CoTools;
