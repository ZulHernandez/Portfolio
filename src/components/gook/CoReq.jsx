import CoTitle from "../general/CoTitle";
import CoInfoCard from "../general/CoInfoCard";

import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import commerce from "../../assets/imgs/gook/res/commerce.svg";
import invent from "../../assets/imgs/gook/res/invent.svg";
import worker from "../../assets/imgs/gook/res/work.svg";
import user from "../../assets/imgs/gook/res/user.svg";
import ofta from "../../assets/imgs/gook/res/ofta.svg";
import optic from "../../assets/imgs/gook/res/optic.svg";
import inventory from "../../assets/imgs/gook/res/inventory.svg";
import market from "../../assets/imgs/gook/res/marketi.svg";
import mercado from "../../assets/imgs/gook/brands/mercado.svg";
import amazon from "../../assets/imgs/gook/brands/amazon.svg";
import benfrank from "../../assets/imgs/gook/brands/benfrank.svg";
import lux from "../../assets/imgs/gook/brands/lux.svg";

const CoReq = () => {
	let partes = [
		{
			id: 1,
			title: "Sistema administrativo",
			description:
				"Esto implica toda la parte relacionada con manejos de inventarios, creación de reportes y administración de ventas",
			icon: invent,
		},
		{
			id: 2,
			title: "Market Place",
			description:
				"Referente a la parte del programa desde el cual el cliente interactuar y puede pedir sus productos",
			icon: commerce,
		},
	];

	let parts = [
		{
			id: 1,
			title: "Administrative system",
			description:
				"This involves all aspects related to inventory management, report creation, and sales administration.",
			icon: invent,
		},
		{
			id: 2,
			title: "Market Place",
			description:
				"Referring to the part of the program from which the customer interacts and can order their products.",
			icon: commerce,
		},
	];

	let usuarios = [
		{
			id: 1,
			title: "A- Compradores",
			description: "Todos aquellos compradores y usuarios del marketplace",
			icon: user,
		},
		{
			id: 2,
			title: "B- Vendedores",
			description:
				"Comprende todos los empleados de GOOK que estarían en contacto directo con el sistema de administración",
			icon: worker,
		},
	];

	let users = [
		{
			id: 1,
			title: "A- Buyers",
			description: "All those buyers and users of the marketplace",
			icon: user,
		},
		{
			id: 2,
			title: "B- Sellers",
			description:
				"Includes all GOOK employees who would be in direct contact with the administration system",
			icon: worker,
		},
	];

	let trabajadores = [
		{
			id: 1,
			title: "B.1- Oftalmólogos",
			description: "Definición de todas las necesidades médicas del proceso",
			icon: ofta,
		},
		{
			id: 2,
			title: "B.2- Optometristas",
			description: "Definieron todo lo que implica el manejo de lentes, ópticas y aparatos de salud visual",
			icon: optic,
		},
		{
			id: 3,
			title: "B.3- Inventoristas",
			description: "Definieron lo relacionado al manejo de SKUS y calculo de productos",
			icon: inventory,
		},
		{
			id: 4,
			title: "B.4- Marketing",
			description: "Definición de promociones, combos y administración de publicidad",
			icon: market,
		}
	]

	let workers = [
		{
			id: 1,
			title: "B.1- Ophthalmologists",
			description: "Definition of all medical needs of the process",
			icon: ofta,
		},
		{
			id: 2,
			title: "B.2- Optometrists",
			description: "They defined everything that involves the management of lenses, optics and visual health devices",
			icon: optic,
		},
		{
			id: 3,
			title: "B.3- Inventors",
			description: "They defined what is related to the management of SKUS and product calculation",
			icon: inventory,
		},
		{
			id: 4,
			title: "B.4- Marketing",
			description: "Definition of promotions, combos and advertising management",
			icon: market,
		}
	]

	const { language } = useContext(MyContext);
	const titles = ["Requirements", "& research"];
	const titulos = ["Requerimientos", "e investigación"];

	return (
		<div className="MixN" style={{ zIndex: "3" }}>
			<CoTitle titles={language == "EN" ? titles : titulos} space="-body" />
			<div className="div-content middle-body darkGook">
				<p className="monBs">
					{language == "EN"
						? "There were two branches under which the requirements that we could obtain from the hands of interviews and first approaches with GOOK were bifurcated. The part of inventory as an internal tool of the company and then the Market Place as that of the business facing the customer."
						: "Existieron dos ramas bajo las cuales se bifurcaron los requerimientos que pudimos obtener de la manos de entrevistas y primeros acercamientos con GOOK. La parte de inventario como herramienta interna de la empresa y después el Market Place como aquello del negocio de cara al cliente."}
				</p>
				<div className="cont-parts">
					<CoInfoCard data={language == "EN" ? parts : partes} title="" />
				</div>
				<p className="monBs">
					{language == "EN"
						? "Two types of profiles were identified under which the experience had to be defined and, within these two large profiles, there were particularities that had to be taken into account in order to close different modules involved. Here are the profiles and contributions to the experience that each user persona gave."
						: "Se identificaron dos tipos de perfiles bajo los cuales se debía definir la experiencia y, dentro de estos dos perfiles grandes, existían particularidades que debían ser tomadas en cuenta para poder cerrar diferentes módulos involucrados. Aquí los perfiles y aportaciones a la experiencia que dieron cad una de las user persona."}
				</p>
				<div className="cont-parts">
					<CoInfoCard data={language == "EN" ? users : usuarios} title="" />
				</div>
				<div className="cont-works">
					<CoInfoCard size={"mini"} data={language == "EN" ? workers : trabajadores} title="" />
				</div>
				<p className="monBs">
					{language == "EN"
						? "As part of a second-level investigation, businesses that were dedicated to offering both visual health products online and products under e-commerce in general were investigated. Several of the brands that ended up helping in the benchmarks for GOOK were:"
						: "Como parte de un research de segundo nivel se investigaron negocios que se dedicasen a ofrecer tanto productos de la salud visual en linea como productos bajo e-commerce en general. Varias de las marcas que terminaron por ayudar en los benchmarks para GOOK fueron:"}
				</p>
				<div className="cont-brand">
					<img src={mercado} alt="mercado" />
					<img src={amazon} alt="amazon" />
					<img src={benfrank} alt="ben&frank" />
					<img src={lux} alt="LUX" />
				</div>
			</div>
		</div>
	);
};

export default CoReq;
