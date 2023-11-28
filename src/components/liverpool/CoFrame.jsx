import CoTitle from "../general/CoTitle";

import { useLayoutEffect, useState } from "react";

import arrow from "../../assets/imgs/vector/arrow.svg";
import ENatomH from "../../assets/imgs/liverpool/ENatomicDesign.svg";
import ENatomV from "../../assets/imgs/liverpool/ENatomicDesignVer.svg";
import ESatomH from "../../assets/imgs/liverpool/ESatomicDesign.svg";
import ESatomV from "../../assets/imgs/liverpool/ESatomicDesignVer.svg";
import toyLogo from "../../assets/imgs/liverpool/brands/toys/logo.svg";
import toyName from "../../assets/imgs/liverpool/brands/toys/name.svg";
import toyMock from "../../assets/imgs/liverpool/brands/toys/mock.webp";
import wilLogo from "../../assets/imgs/liverpool/brands/williams/logo.svg";
import wilName from "../../assets/imgs/liverpool/brands/williams/name.svg";
import wilMock from "../../assets/imgs/liverpool/brands/williams/mock.webp";
import wesLogo from "../../assets/imgs/liverpool/brands/west/logo.svg";
import wesName from "../../assets/imgs/liverpool/brands/west/name.svg";
import wesMock from "../../assets/imgs/liverpool/brands/west/mock.webp";
import gapLogo from "../../assets/imgs/liverpool/brands/gap/logo.svg";
import gapName from "../../assets/imgs/liverpool/brands/gap/name.svg";
import gapMock from "../../assets/imgs/liverpool/brands/gap/mock.webp";
import livLogo from "../../assets/imgs/liverpool/brands/liverpool/logo.svg";
import livName from "../../assets/imgs/liverpool/brands/liverpool/name.svg";
import livMock from "../../assets/imgs/liverpool/brands/liverpool/mock.webp";
import subLogo from "../../assets/imgs/liverpool/brands/suburbia/logo.svg";
import subName from "../../assets/imgs/liverpool/brands/suburbia/name.svg";
import subMock from "../../assets/imgs/liverpool/brands/suburbia/mock.webp";
import banLogo from "../../assets/imgs/liverpool/brands/banana/logo.svg";
import banName from "../../assets/imgs/liverpool/brands/banana/name.svg";
import banMock from "../../assets/imgs/liverpool/brands/banana/mock.webp";
import potLogo from "../../assets/imgs/liverpool/brands/pottery/logo.svg";
import potName from "../../assets/imgs/liverpool/brands/pottery/name.svg";
import potMock from "../../assets/imgs/liverpool/brands/pottery/mock.webp";
import pokLogo from "../../assets/imgs/liverpool/brands/potteryK/logo.svg";
import pokName from "../../assets/imgs/liverpool/brands/potteryK/name.svg";
import pokMock from "../../assets/imgs/liverpool/brands/potteryK/mock.webp";
import sparks from "../../assets/imgs/liverpool/sparks.svg";

import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import PropTypes from "prop-types";

const CoExpone = ({ marca }) => {
	const { language } = useContext(MyContext);
	CoExpone.propTypes = {
		marca: PropTypes.object.isRequired,
	};
	return (
		<div className="cont-brands-show">
			<img loading="lazy"
				className="cont-brands-show-mock"
				src={marca.mock}
				alt={marca.brand + " mock"}
			/>
			<div className="cont-brands-show-compo">
				<div className="cont-brands-show-compo-row">
					<div className={"clickable btn-primary-" + marca.brand}>
						{language == "EN" ? "Text button here" : "Texto del botón"}
						<img loading="lazy" src={sparks} />
					</div>
					<div className={"clickable btn-second-" + marca.brand}>
						{language == "EN" ? "Text button here" : "Texto del botón"}
						<svg
							width="25"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19.3291 9L20.5791 6.25L23.3291 5L20.5791 3.75L19.3291 1L18.0791 3.75L15.3291 5L18.0791 6.25L19.3291 9Z"
								fill={marca.color}
							/>
							<path
								d="M19.3291 15L18.0791 17.75L15.3291 19L18.0791 20.25L19.3291 23L20.5791 20.25L23.3291 19L20.5791 17.75L19.3291 15Z"
								fill={marca.color}
							/>
							<path
								d="M11.8291 9.5L9.3291 4L6.8291 9.5L1.3291 12L6.8291 14.5L9.3291 20L11.8291 14.5L17.3291 12L11.8291 9.5ZM10.3191 12.99L9.3291 15.17L8.3391 12.99L6.1591 12L8.3391 11.01L9.3291 8.83L10.3191 11.01L12.4991 12L10.3191 12.99Z"
								fill={marca.color}
							/>
						</svg>
					</div>
				</div>
				<div className="cont-brands-show-compo-row">
					<div className="div-input">
						<input
							placeholder={
								language == "EN" ? "Placeholder text" : "Texto placeholder"
							}
							className={"input-" + marca.brand}
						></input>
						<span className="input-span">
							{language == "EN" ? "Help text" : "Texto de ayuda"}
						</span>
					</div>
				</div>
				<p className={"cont-brands-show-compo-text-" + marca.brand}>
					Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww
					Xx Yy Zz <br /> 1 2 3 4 5 6 7 8 9 0
				</p>
			</div>
		</div>
	);
};

const CoBrandsCard = () => {
	let brands = [
		{
			brand: "Toys R Us",
			logo: toyLogo,
			name: toyName,
			mock: toyMock,
			color: "#0F4DBC",
		},
		{
			brand: "Williams Sonoma",
			logo: wilLogo,
			name: wilName,
			mock: wilMock,
			color: "#E81818",
		},
		{
			brand: "West Elm",
			logo: wesLogo,
			name: wesName,
			mock: wesMock,
			color: "#ED2724",
		},
		{
			brand: "GAP",
			logo: gapLogo,
			name: gapName,
			mock: gapMock,
			color: "#122344",
		},
		{
			brand: "Liverpool",
			logo: livLogo,
			name: livName,
			mock: livMock,
			color: "#E10098",
		},
		{
			brand: "Suburbia",
			logo: subLogo,
			name: subName,
			mock: subMock,
			color: "#612066",
		},
		{
			brand: "Banana",
			logo: banLogo,
			name: banName,
			mock: banMock,
			color: "#333333",
		},
		{
			brand: "Pottery Barn",
			logo: potLogo,
			name: potName,
			mock: potMock,
			color: "#990000",
		},
		{
			brand: "PotteryK Barn Kids",
			logo: pokLogo,
			name: pokName,
			mock: pokMock,
			color: "#80B9E6",
		},
		{
			brand: "Toys R Us",
			logo: toyLogo,
			name: toyName,
			mock: toyMock,
			color: "#0F4DBC",
		},
		{
			brand: "Williams Sonoma",
			logo: wilLogo,
			name: wilName,
			mock: wilMock,
			color: "#E81818",
		},
		{
			brand: "West Elm",
			logo: wesLogo,
			name: wesName,
			mock: wesMock,
			color: "#ED2724",
		},
		{
			brand: "GAP",
			logo: gapLogo,
			name: gapName,
			mock: gapMock,
			color: "#122344",
		},
		{
			brand: "Liverpool",
			logo: livLogo,
			name: livName,
			mock: livMock,
			color: "#E10098",
		},
		{
			brand: "Suburbia",
			logo: subLogo,
			name: subName,
			mock: subMock,
			color: "#612066",
		},
		{
			brand: "Banana Republic",
			logo: banLogo,
			name: banName,
			mock: banMock,
			color: "#333333",
		},
		{
			brand: "Pottery Barn",
			logo: potLogo,
			name: potName,
			mock: potMock,
			color: "#990000",
		},
		{
			brand: "PotteryK Barn Kids",
			logo: pokLogo,
			name: pokName,
			mock: pokMock,
			color: "#80B9E6",
		},
	];

	const [brand, setBrand] = useState(0);

	return (
		<div className="cont-brands">
			<div className="cont-brands-sup">
				<div className="cont-brands-car">
					<img loading="lazy"
						style={{ transform: "rotate(-90deg)" }}
						className="cont-brands-arrow clickable"
						src={arrow}
						onClick={() => {
							setBrand(brand > 1 ? brand - 1 : 9);
						}}
					/>
					<img loading="lazy"
						id="b1"
						src={brands[0 + brand].logo}
						alt={brands[0 + brand].brand}
					/>
					<img loading="lazy"
						id="b2"
						src={brands[1 + brand].logo}
						alt={brands[1 + brand].brand}
					/>
					<img loading="lazy"
						id="b3"
						src={brands[2 + brand].logo}
						alt={brands[2 + brand].brand}
					/>
					<img loading="lazy"
						id="b4"
						src={brands[3 + brand].logo}
						alt={brands[3 + brand].brand}
					/>
					<img loading="lazy"
						id="b5"
						src={brands[4 + brand].logo}
						alt={brands[4 + brand].brand}
					/>
					<img loading="lazy"
						id="b4"
						src={brands[5 + brand].logo}
						alt={brands[5 + brand].brand}
					/>
					<img loading="lazy"
						id="b3"
						src={brands[6 + brand].logo}
						alt={brands[6 + brand].brand}
					/>
					<img loading="lazy"
						id="b2"
						src={brands[7 + brand].logo}
						alt={brands[7 + brand].brand}
					/>
					<img loading="lazy"
						id="b1"
						src={brands[8 + brand].logo}
						alt={brands[8 + brand].brand}
					/>
					<img loading="lazy"
						style={{ transform: "rotate(90deg)" }}
						className="cont-brands-arrow clickable"
						src={arrow}
						onClick={() => {
							setBrand(brand < 8 ? brand + 1 : 0);
						}}
					/>
				</div>
				<img loading="lazy" src={brands[4 + brand].name} alt={brands[4 + brand].brand} />
			</div>
			<CoExpone marca={brands[4 + brand]} />
		</div>
	);
};

const CoFrame = () => {
	const { language } = useContext(MyContext);
	const titles = ["Framework", "UI Design"];
	const titulos = ["Framework", "Diseño de UI"];

	const orient = useWindowSize();

	function useWindowSize() {
		const [orient, setOrient] = useState([]);
		useLayoutEffect(() => {
			function updateSize() {
				if (window.innerWidth > window.innerHeight * 0.7) {
					setOrient([ENatomH, ESatomH]);
				} else {
					setOrient([ENatomV, ESatomV]);
				}
			}
			window.addEventListener("resize", updateSize);
			updateSize();
			return () => window.removeEventListener("resize", updateSize);
		}, []);
		return orient;
	}

	return (
		<div style={{ zIndex: "3" }}>
			<CoTitle
				titles={language == "EN" ? titles : titulos}
				space="-body"
				color="#833177"
			/>
			<div className="div-content middle-body">
				<p className="monBs-dark">
					{language == "EN"
						? "Due to the different businesses that operate within Liverpool, a design system is used that first bases its construction on the Atomic Design methodology for the determination of its elements within a global library called GLUE."
						: "Debido a los diferentes negocios que operan dentro de Liverpool, se utiliza un sistema de diseño que primero basa su construcción en la metodología de Atomic Design para la determinación de sus elementos dentro de una librería global llamada GLUE."}
				</p>
				<div className="atom-design">
					<img loading="lazy"
						className="img-atom"
						src={language == "EN" ? orient[0] : orient[1]}
						alt="atomic design"
					/>
				</div>
				<p className="monBs-dark">
					{language == "EN"
						? "My job as a UXer is the maintenance, expansion, documentation, and application of GLUE within the different projects that UX attends. For the creation of improvements or other secondary businesses under Suburbia and Liverpool, they rely on UI Kits that take GLUE as a template. \nThese are examples of the different businesses that operate within the port and their applications:"
						: "Mi trabajo como UXer es el mantenimiento, expansión, documentación y aplicación de GLUE dentro de los diferentes proyectos que atiende UX. Para la creación de mejoras u otros negocios secundarios bajo Suburbia y Liverpool, se apoyan de UI Kits que toman a GLUE como plantilla. \nEstos son ejemplos de los diferentes negocios que operan dentro del puerto y sus aplicaciones:"}
				</p>
				<CoBrandsCard />
			</div>
		</div>
	);
};

export default CoFrame;
