import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import CoTitle from "../general/CoTitle";

import logotipo from "../../assets/imgs/gook/logotipo.svg";
import logotipoB from "../../assets/imgs/gook/logotipoB.svg";

import avatar1 from "../../assets/imgs/gook/avatar/avatar1.svg";
import avatar2 from "../../assets/imgs/gook/avatar/avatar2.svg";
import avatar3 from "../../assets/imgs/gook/avatar/avatar3.svg";
import avatar4 from "../../assets/imgs/gook/avatar/avatar4.svg";
import avatar5 from "../../assets/imgs/gook/avatar/avatar5.svg";
import avatar6 from "../../assets/imgs/gook/avatar/avatar6.svg";
import avatar7 from "../../assets/imgs/gook/avatar/avatar7.svg";
import avatar8 from "../../assets/imgs/gook/avatar/avatar8.svg";
import avatar9 from "../../assets/imgs/gook/avatar/avatar9.svg";
import avatar10 from "../../assets/imgs/gook/avatar/avatar10.svg";

import pack1 from "../../assets/imgs/gook/pack/pack1.svg";
import pack2 from "../../assets/imgs/gook/pack/pack2.svg";
import pack3 from "../../assets/imgs/gook/pack/pack3.svg";
import pack4 from "../../assets/imgs/gook/pack/pack4.svg";
import pack5 from "../../assets/imgs/gook/pack/pack5.svg";
import pack6 from "../../assets/imgs/gook/pack/pack6.svg";

import gif1 from "../../assets/imgs/gook/gifs/BiseladoT.gif";
import gif2 from "../../assets/imgs/gook/gifs/ExamenT.gif";
import gif3 from "../../assets/imgs/gook/gifs/RepararT.gif";

const CoAvatar = ({ avatares }) => {
	return avatares.map((avatar) => {
		return <img key={avatares.indexOf(avatar)} src={avatar} alt="" />;
	});
};

const CoDesign = () => {
	const { language } = useContext(MyContext);

	const titles = ["Design"];
	const titulos = ["Diseño"];

	let avatares = [
		avatar1,
		avatar2,
		avatar3,
		avatar4,
		avatar5,
		avatar6,
		avatar7,
		avatar8,
		avatar9,
		avatar10,
	];

	let packs = [pack1, pack2, pack3, pack4, pack5, pack6];

	let gifs = [gif1, gif2, gif3];

	return (
		<div style={{ zIndex: "4" }}>
			<CoTitle
				titles={language == "EN" ? titles : titulos}
				space="-body"
				color="#333333"
			/>
			<div className="div-content middle-body">
				<p className="monBs-dark">
					{language == "EN"
						? "In this stage of the project, the design of the web application was carried out, which was done in Adobe XD. The design was based on the requirements and research carried out in the previous stage."
						: "Ya en la etapa de diseño primero fue necesario conocer cuales eran los lineamientos de la marca actual de GOOK: su selección de tipografía, colores institucionales, imagen empresarial y demás."}
				</p>
				<div className="cont-design">
					<div className="cont-design-item">
						<div id="white" className="cont-design-item-img">
							<img src={logotipo} alt="" />
						</div>
						<div id="white" className="cont-design-item-txt">
							Pantone P 1-1 C <br /> CMYK C:0% M:0% Y:0% K:0% <br /> RGB R:255
							G:255 B:255
							<br /> HTML #FFFFFF
						</div>
					</div>
					<div className="cont-design-item">
						<div id="black" className="cont-design-item-img">
							<img src={logotipoB} alt="" />
						</div>
						<div id="black" className="cont-design-item-txt">
							Pantone P Process Black C <br /> CMYK C:91% M:79% Y:62% K:97%{" "}
							<br /> RGB R:0 G:0 B:0
							<br /> HTML #000000
						</div>
					</div>
				</div>
				<center style={{ width: "100%" }}>
					<hr className="line-hubbub" style={{ width: "100%" }} />
				</center>
				<div id="especial" className="cont-design">
					<div id="geomanist" className="cont-design-item">
						<h5>
							{language == "EN" ? "Corporative font-face" : "Tipo corporativa"}
						</h5>
						<h5>Geomanist</h5>
						<br />
						<p>
							Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
							Ww Xx Yy Zz 1 2 3 4 5 6 7 8 9 0
						</p>
						<div className="typo-add">
							<div className="typo-add-bullet">
								<p id="gLight">Light</p>
								<p id="gRegular">Regular</p>
							</div>
							<div className="typo-add-bullet">
								<p id="gBook">Book</p>
								<p id="gBold">Bold</p>
							</div>
						</div>
					</div>
					<div id="asap" className="cont-design-item">
						<h5>
							{language == "EN" ? "Secondary font-face" : "Tipo secundaria"}
						</h5>
						<h5>Asap</h5>
						<br />
						<p>
							Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
							Ww Xx Yy Zz 1 2 3 4 5 6 7 8 9 0
						</p>
						<div className="typo-add-bullet" style={{ width: "100%" }}>
							<p id="aRegular">Regular</p>
							<p id="aBold">Bold</p>
						</div>
					</div>
				</div>
				<p className="monBs-dark">
					{language == "EN"
						? "From these design guidelines, avatars were also generated for the users registered on the site and others for the combos and promotions within the products offered in the marketplace. Likewise, gifs and other types of graphic resources were also created for the page."
						: "Nacido de estos guidelines de diseño tambien se generaron avatares para los usuarios registrados en el sitio y otros más para los combos y promociones dentro de los productos ofrecidos en el marketplace. De igual forma gifs y otro tipo de recursos gráficos tambien fueron creados para la página."}
				</p>
				<div className="cont-avatares">
					<CoAvatar avatares={avatares} />
				</div>
				<div className="cont-packs">
					<CoAvatar avatares={packs} />
				</div>
				<div className="cont-gifs">
					<CoAvatar avatares={gifs} />
				</div>
				<p className="monBs-dark">
					{language == "EN"
						? "Once the brand guidelines were downloaded, the prototyping of the administration system and marketplace as a whole began. All this process of defining experience and interface was tested with workers and buyers respectively, The final mockup concluded in the following prototype."	
						: "Bajados los lineamientos de marca se comenzó con el prototipado del sistema de administración y marketplace en su conjunto. Todo este proceso de definición de experiencia e interfaz fue testeado con trabajadores y compradores respectivamente, La maqueta final concluyo en el siguiente prototipo."}
				</p>
				<iframe width="1920" height="1080" src="https://xd.adobe.com/embed/65a0283f-cdd5-47e4-9c96-06d3e51439c5-30f3/" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms"></iframe>
			</div>
		</div>
	);
};

export default CoDesign;
