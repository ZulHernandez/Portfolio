import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import screen1 from "../../assets/imgs/hubbub/research/celCarru/HUBBUB1.webp";
import screen2 from "../../assets/imgs/hubbub/research/celCarru/HUBBUB2.webp";
import screen3 from "../../assets/imgs/hubbub/research/celCarru/HUBBUB3.webp";
import screen4 from "../../assets/imgs/hubbub/research/celCarru/HUBBUB5.webp";
import screen5 from "../../assets/imgs/hubbub/research/celCarru/HUBBUB6.webp";
import CoTitle from "../general/CoTitle";

const CoScreen = () => {
	let screens = [
		screen4,
		screen5,
		screen1,
		screen2,
		screen3,
	];

	return (
		<div className="cont-screen">
			<img loading="lazy" id="s1" src={screens[0]} alt="HUBBUB" />
			<img loading="lazy" id="s2" src={screens[1]} alt="HUBBUB" />
			<img loading="lazy" id="s3" src={screens[2]} alt="HUBBUB" />
			<img loading="lazy" id="s2" src={screens[3]} alt="HUBBUB" />
			<img loading="lazy" id="s1" src={screens[4]} alt="HUBBUB" />
		</div>
	);
};

const CoResSec = () => {
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
						? "Another important part of the research was the collection of the different graphic guidelines that permeated the project, this, with the objective of understanding what their use was, the tone of the project and finally what part of the graphic language could be recaptured and used within this new project."
						: "Otra parte importante de la investigación era la recopilación de los diferentes lineamientos gráficos que permeaban el proyecto, esto, con el objetivo de entender cual era su uso, el tono del proyecto y finalmente que parte del lenguaje gráfico podía ser recapturado y usado dentro de este nuevo proyecto."}
				</p>
				<CoScreen />
				<p className="monBs-dark">
					{language == "EN"
						? "With this, they were able to determine the new elements that would comprise the project's website and, at the same time, determine which ones would be essential to maintain so as not to separate both branches of HUBBUB in their entirety. The determination of a color palette and typographies were the products of this."
						: "Con esto pudieron determinaste los nuevos elementos que comprenderían el sitio web del proyecto y, al mismo tiempo, determinar cuales serían los esenciales a mantener para no separar en su totalidad ambas ramas de HUBBUB. La determinación de una paleta de colores y tipografías fueron los productos de esto."}
				</p>
				<div className="cont-design">
					<div className="cont-colors">
						<div id="OfGrey" className="color">
							<p>OfGrey - #333333</p>
						</div>
						<div id="OfYellow" className="color">
							<p>OfYellow - #fff200</p>
						</div>
						<div id="Link" className="color">
							<p>Link - #0075FF</p>
						</div>
						<div id="Rose" className="color">
							<p>Rose - #EF5DA8</p>
						</div>
					</div>
					<div className="cont-typo">
						<h4>Montserrat</h4>
						<p>
							Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
							Ww Xx Yy Zz <br /> 1 2 3 4 5 6 7 8 9 0
						</p>
						<div className="typo-weight">
							<p id="Mons1">Extra Light</p>
							<p id="Mons5">Semi Bold</p>
							<p id="Mons2">Light</p>
							<p id="Mons6">Bold</p>
							<p id="Mons3">Regular</p>
							<p id="Mons7">Extra Bold</p>
							<p id="Mons4">Medium</p>
							<p id="Mons8">Black</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoResSec;
