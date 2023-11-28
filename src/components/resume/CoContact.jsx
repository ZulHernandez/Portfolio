/* eslint-disable no-unused-vars */
import CoTitle from "../general/CoTitle";
import telefono from "../../assets/imgs/vector/contact/call.svg";
import correo from "../../assets/imgs/vector/contact/mail.svg";
import telegram from "../../assets/imgs/vector/contact/telegram.svg";
import calendario from "../../assets/imgs/vector/contact/calendar.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Farrow from "../../assets/imgs/vector/arrow_forward.svg";
import Swal from "sweetalert2";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const CoMedium = () => {
	const { language } = useContext(MyContext);

	let contacts = [
		{
			id: 1,
			icon: telefono,
			name: "phone",
			text: "(+52) 55-6502-7645",
			type: "tel:",
			link: "+525565027645",
		},
		{
			id: 2,
			icon: correo,
			name: "email",
			text: "saululiseshernandezcruz@gmail.com",
			type: "mailto:",
			link: "saululiseshernandezcruz@gmail.com",
		},
		{
			id: 3,
			icon: telegram,
			name: "telegram",
			text: "@ZulHernandezC",
			type: "",
			link: "https://t.me/ZulHernandezC",
		},
		{
			id: 4,
			icon: calendario,
			name: "calendar",
			text: language == "EN" ? "Schedule an appointment" : "Agendar una cita",
			type: "",
			link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IHfVcWon0GCIlKQNx98HMtHPHf_UV5dvAJD88J-6lr3AS9z3heiAl9kd_KvBRN88H2-5mS9VQ",
		},
	];

	return contacts.map((contact) => {
		return (
			<div key={contact.id} className="cont-contact-text-redes">
				<a href={contact.type + contact.link} target="_blank" rel="noreferrer">
					<img loading="lazy"
						className="cont-contact-text-redes-img"
						src={contact.icon}
						alt={contact.name}
					></img>
					<span className="cont-contact-text-redes-text">{contact.text}</span>
				</a>
			</div>
		);
	});
};

const CoContact = () => {
	const { language } = useContext(MyContext);

	const titles = ["get in touch"];
	const titulos = ["contactemos"];

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_spn3r8s",
				"template_66qc5q4",
				form.current,
				"TXmMh6LiY_HpOm-rx"
			)
			.then(
				(_result) => {
					Swal.fire({
						icon: "success",
						html: "<h3>Succes!</h3><p class='swal-description'>I will contact you as soon as I read it. Thank You!</p>",
						timer: 2000,
						padding: "3rem 3rem 5rem 3rem",
						background: "#fff",
						backdrop: "rgba(0,0,0,0.5)",
						showConfirmButton: false,
					});
				},
				(_error) => {
					Swal.fire({
						icon: "error",
						html: "<h3>Oops!</h3><p class='swal-description'>Something stop your message from be sending.</p>",
						timer: 2000,
						padding: "3rem 3rem 5rem 3rem",
						background: "#fff",
						backdrop: "rgba(0,0,0,0.5)",
						showConfirmButton: true,
						confirmButtonText: "Try it Again!",
						confirmButtonColor: "#ff2079",
					});
				}
			);
	};

	return (
		<div
			style={{ zIndex: "4" }}
			className="mixN"
			id={language == "EN" ? "get-in-touch" : "contactame"}
		>
			<CoTitle titles={language == "EN" ? titles : titulos} />
			<div className="div-content middle dark">
				<h2 style={{ color: "#e6e6e6" }}>
					{language == "EN" ? "LET'S TALK!" : "Platiquemos"}
				</h2>
				<div className="cont-contact">
					<div className="cont-contact-text">
						<div>
							<p className="monBs">
								{language == "EN"
									? "Do you have any projects in mind or do you just want to say hello?"
									: "¿Tienes algún proyecto en mente o tan solo quieres saludar?"}
							</p>
							<p className="monBs">
								{language == "EN"
									? "You can send me a direct message through the form here on the side, or you can contact me through the following means and even schedule an appointment with me:"
									: "Puedes enviarme un mensaje directo a través del formulario aquí al lado, o puedes contactarme a través de los siguientes medios e incluso agendar una cita conmigo:"}
							</p>
						</div>
						<CoMedium />
					</div>
					<form ref={form} onSubmit={sendEmail} className="cont-contact-form">
						<div className="cont-contact-form-input">
							<label className="label-input">{language == "EN" ? "How should I call you?" : "¿Cómo debería llamarte?"}</label>
							<input
								name="user_name"
								id="name"
								type="text"
								placeholder={language == "EN" ? "Write your name here" : "Escribe tu nombre aquí"}
							/>
						</div>
						<div className="cont-contact-form-input">
							<label className="label-input">{language == "EN" ? "Where I can find you?" : "¿Dónde puedo encontrarte?"}</label>
							<input
								name="user_email"
								id="email"
								type="email"
								placeholder={language == "EN" ? "Write your email here" : "Escribe tu correo aquí"}
							/>
						</div>
						<div className="cont-contact-form-input">
							<label className="label-input">{language == "EN" ? "Tell me something!" : "Cuentame algo"}</label>
							<textarea
								name="message"
								id="message"
								placeholder={language == "EN" ? "Just write everything you want" : "Escribe todo lo que quieras"}
							></textarea>
						</div>
						<div
							className="button"
							style={{ width: "100%", justifyContent: "flex-end" }}
						>
							<button
								style={{
									backgroundColor: "transparent",
									border: "none",
								}}
								type="submit"
								className="button-tertiary clickable"
								value="send"
							>
								{language == "EN" ? "send" : "enviar"}<img loading="lazy" src={Farrow}></img>
								<br />
								<br />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CoContact;
