import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import CoTitle from "../general/CoTitle";

import sys1 from "../../assets/imgs/hubbub/system/sys1.gif";
import sys2 from "../../assets/imgs/hubbub/system/sys2.gif";
import sys3 from "../../assets/imgs/hubbub/system/sys3.gif";
import sys4 from "../../assets/imgs/hubbub/system/sys4.gif";
import sys5 from "../../assets/imgs/hubbub/system/sys5.gif";
import sys6 from "../../assets/imgs/hubbub/system/sys6.gif";
import sys7 from "../../assets/imgs/hubbub/system/sys7.gif";
import sys8 from "../../assets/imgs/hubbub/system/sys8.gif";
import sys9 from "../../assets/imgs/hubbub/system/sys9.gif";

const CoSite = () => {
	const { language } = useContext(MyContext);

	const titles = ["Second hand", "research"];
	const titulos = ["Investigación", "de segunda", "mano"];

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
						? "The entire code and the current website project is currently under development and the different graphic viewers that were determined throughout the user stories and sketches have already been programmed either with charts.js or p5.js. Also part of the interface design has already been programmed and is in the stage of testing and bug fixing."
						: "Todo el código y el proyecto del sitio web actualmente se encuentra en desarrollo y los diferentes visualizadores gráficos que fueron determinados a lo largo de las historias de usuario y sketches ya han sido programados ya sea con charts.js o p5.js. También parte del diseño de la interfaz ya ha sido programado y se encuentra en la etapa de pruebas y corrección de errores."}
				</p>
				<iframe
					title="paleyPark"
					frameborder="0"
					allowfullscreen
					mozallowfullscreen="true"
					webkitallowfullscreen="true"
					allow="autoplay; fullscreen; xr-spatial-tracking"
					xr-spatial-tracking
					execution-while-out-of-viewport
					execution-while-not-rendered
					web-share
					src="https://sketchfab.com/models/de7a7fbca06140319776930b19a0ddbf/embed?autospin=1&autostart=1&camera=0&annotations_visible=1"
				></iframe>
				<div className="cont-sys">
					<div className="cont-sys-lvl1">
						<img loading="lazy" src={sys1} />
						<img loading="lazy" src={sys2} />
						<img loading="lazy" src={sys3} />
					</div>
					<div className="cont-sys-lvl2">
						<img loading="lazy" src={sys4} />
						<img loading="lazy" src={sys5} />
					</div>
					<div className="cont-sys-lvl1">
						<img loading="lazy" src={sys6} />
						<img loading="lazy" src={sys7} />
						<img loading="lazy" src={sys8} />
					</div>
					<img loading="lazy" src={sys9} />
				</div>
			</div>
		</div>
	);
};

export default CoSite;
