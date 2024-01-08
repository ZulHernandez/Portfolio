import CoTitle from "../general/CoTitle";

import BNguinda from "../../assets/imgs/bitmap/misFotos/BNguinda.webp";
import BNnegro from "../../assets/imgs/bitmap/misFotos/BNnegro.webp";
import BNmorado from "../../assets/imgs/bitmap/misFotos/BNraya.webp";

import Mguinda from "../../assets/imgs/bitmap/misFotos/Mguinda.webp";
import Mnegro from "../../assets/imgs/bitmap/misFotos/Mnegro.webp";
import Mraya from "../../assets/imgs/bitmap/misFotos/Mraya.webp";

import Pguinda from "../../assets/imgs/bitmap/misFotos/Pguinda.webp";
import Pnegro from "../../assets/imgs/bitmap/misFotos/Pnegro.webp";
import Praya from "../../assets/imgs/bitmap/misFotos/Praya.webp";

import Rguinda from "../../assets/imgs/bitmap/misFotos/Rguinda.webp";
import Rnegro from "../../assets/imgs/bitmap/misFotos/Rnegro.webp";
import Rraya from "../../assets/imgs/bitmap/misFotos/Rraya.webp";

import { useContext } from "react";
import { MyContext } from "../../components/context/MyContext";

//* Imagenes de mi
let images = [
	BNguinda,
	BNnegro,
	BNmorado,
	Mguinda,
	Mnegro,
	Mraya,
	Pguinda,
	Pnegro,
	Praya,
	Rguinda,
	Rnegro,
	Rraya,
];
let iman;

//funcion Componente Home
const CoHome = () => {
	const { language } = useContext(MyContext);

	//* Título de la sección
	let titles = ["ux/ui design", "software dev"];
	let titulos = ["diseño de UX/UI", "Desarrollo de SOFTWARE"];

	//funcion Calcula la cantidad de años de experiencia y edad
	//param fecha: Fechad de inicio de trabajo o nacimiento
	function calculaAnio(fecha) {
		var hoy = new Date();
		var cumpleanos = new Date(fecha);
		var edad = hoy.getFullYear() - cumpleanos.getFullYear();
		var m = hoy.getMonth() - cumpleanos.getMonth();

		if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
			edad--;
		}

		return edad;
	}

	//funcion Calcula la hora del día para mostrar diferentes imagenes
	function setImage() {
		iman = Math.floor(Math.random() * (2 - 0 + 1) + 0);
		console.log(iman);
		return iman;
	}

	//* Contexto para conocer la posición dentro de la página

	return (
		<div
			id={language == "EN" ? "about-me" : "sobre-mi"}
			style={{ zIndex: "1" }}
		>
			<CoTitle titles={language == "EN" ? titles : titulos} />
			<div className="div-content" style={{ height: "fit-content" }}>
				<div id="cont-Home">
					<div className="div-text">
						<div>
							<p className="monXs">
								{language == "EN" ? "HELLO, MY NAME IS" : "HOLA MI NOMBRE ES"}{" "}
							</p>
							<h2>
								<span>SAÚL</span>
								<br />
								<span>HERNÁNDEZ</span>
							</h2>
						</div>
						<div style={{ display: language == "EN" ? "block" : "none" }}>
							<p className="monXl">
								I am {calculaAnio("12/19/1999")} years old and I am a{" "}
								<b>Senior User Interface and User Experience Designer</b> with{" "}
								<b>over {calculaAnio("1/1/2016")} years of experience.</b>{" "}
								Throughout my career, I have participated in projects where I
								have created{" "}
								<b>prototypes, conducted research, and performed testing</b> for
								the definition of digital products.
							</p>
							<br />
							<p className="monXl">
								I have also been able to{" "}
								<b>define and apply design frameworks</b>, starting from{" "}
								<b>design libraries and tokens</b> to their implementation in
								applications,{" "}
								<b>creating inputs in SASS, JSONs, and other technologies.</b>
							</p>
						</div>
						<div style={{ display: language == "ES" ? "block" : "none" }}>
							<p className="monXl">
								Tengo {calculaAnio("12/19/1999")} años y soy un{" "}
								<b>diseñador de Interfaz y Experiencia de usuario</b> con{" "}
								<b>más de {calculaAnio("1/1/2016")} años de experiencia.</b> A
								lo largo de mi carrera he podido trabajar en proyectos donde he
								creado <b>prototipos, research y test de performance</b> para la
								definición de productos digitales.
							</p>
							<br />
							<p className="monXl">
								También he tenido la oportunidad de{" "}
								<b>definir y aplicar frameworks de diseño</b>, desde{" "}
								<b>librerías de diseño y tokens</b> hasta su implementación en
								aplicaciones{" "}
								<b>creando insumos en SASS, JSONs y otras tecnologías.</b>
							</p>
						</div>
						<div className="photo">
							<div
								id="imgP"
								className="photo-portrait"
								style={{
									backgroundImage: "url(" + images[setImage() + 3] + ")",
								}}
							></div>
							<div
								id="imgPi"
								className="photo-portrait"
								style={{ backgroundImage: "url(" + images[iman + 6] + ")" }}
							></div>
							<div
								id="imgR"
								className="photo-portrait"
								style={{ backgroundImage: "url(" + images[iman + 9] + ")" }}
							></div>
							<div
								id="imgB"
								className="photo-portrait"
								style={{ backgroundImage: "url(" + images[iman] + ")" }}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoHome;
