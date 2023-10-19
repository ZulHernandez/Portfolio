import CoTitle from "../general/CoTitle";
import rGris from "../../assets/imgs/bitmap/misFotos/rayaAzul.png";
import nGris from "../../assets/imgs/bitmap/misFotos/BNnegro.png";
import gGris from "../../assets/imgs/bitmap/misFotos/BNguinda.png";

//* Imagenes de mi
let images = [rGris, nGris, gGris];

//funcion Componente Home
const CoHome = () => {
	//* Título de la sección
	let titles = ["ux/ui design", "software dev"];

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
		return Math.floor(Math.random() * (2 - 0 + 1) + 0);
	}

	//* Contexto para conocer la posición dentro de la página

	return (
		<div id="about-me" style={{ zIndex: "1" }}>
			<CoTitle titles={titles} />
			<div className="div-content" style={{ paddingBottom: "0px" }}>
				<div id="cont-Home">
					<div className="div-text">
						<div>
							<p className="monXs">HELLO, MY NAME IS</p>
							<h2>
								<span>SAÚL</span>
								<br />
								<span>HERNÁNDEZ</span>
							</h2>
						</div>
						<div>
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
					</div>
					<div className="photo-portrait">
						<img className="foto-mia" src={images[setImage()]} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoHome;
