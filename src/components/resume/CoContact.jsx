import CoTitle from "../general/CoTitle";
import telefono from "../../assets/imgs/vector/contact/call.svg";
import correo from "../../assets/imgs/vector/contact/mail.svg";
import telegram from "../../assets/imgs/vector/contact/telegram.svg";
import calendario from "../../assets/imgs/vector/contact/calendar.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Farrow from "../../assets/imgs/vector/arrow_forward.svg";
import Swal from "sweetalert2";

let contacts = [
	{
		id: 1,
		icon: telefono,
		text: "(+52) 55-6502-7645",
		type: "tel:",
		link: "+525565027645",
	},
	{
		id: 2,
		icon: correo,
		text: "saululiseshernandezcruz@gmail.com",
		type: "mailto:",
		link: "saululiseshernandezcruz@gmail.com",
	},
	{
		id: 3,
		icon: telegram,
		text: "@ZulHernandezC",
		type: "",
		link: "https://t.me/ZulHernandezC",
	},
	{
		id: 4,
		icon: calendario,
		text: "Schedule your appointment!",
		type: "",
		link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IHfVcWon0GCIlKQNx98HMtHPHf_UV5dvAJD88J-6lr3AS9z3heiAl9kd_KvBRN88H2-5mS9VQ",
	},
];

const CoMedium = () => {
	return contacts.map((contact) => {
		return (
			<div key={contact.id} className="cont-contact-text-redes">
				<a href={contact.type + contact.link} target="_blank" rel="noreferrer">
					<img className="cont-contact-text-redes-img" src={contact.icon}></img>
					<span className="cont-contact-text-redes-text">{contact.text}</span>
				</a>
			</div>
		);
	});
};

const CoContact = () => {
	const titles = ["get in touch"];

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
				(result) => {
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
				(error) => {
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
		<div style={{ zIndex: "4" }} className="mixN" id="get-in-touch">
			<CoTitle titles={titles} />
			<div className="div-content middle dark">
				<h2 style={{ color: "#e6e6e6" }}>LET'S TALK!</h2>
				<div className="cont-contact">
					<div className="cont-contact-text">
						<div>
							<p className="monBs">
								Do you have any projects in mind or do you just want to say
								hello?
							</p>
							<p className="monBs">
								You can send me a direct message through the form here on the
								side, or you can contact me through the following means and even
								schedule an appointment with me:
							</p>
						</div>
						<CoMedium />
					</div>
					<form ref={form} onSubmit={sendEmail} className="cont-contact-form">
						<div className="cont-contact-form-input">
							<label className="label-input">How should I call you?</label>
							<input
								name="user_name"
								id="name"
								type="text"
								placeholder="Write your name here"
							/>
						</div>
						<div className="cont-contact-form-input">
							<label className="label-input">Where I can find you?</label>
							<input
								name="user_email"
								id="email"
								type="email"
								placeholder="Write your email here"
							/>
						</div>
						<div className="cont-contact-form-input">
							<label className="label-input">Tell me something!</label>
							<textarea
								name="message"
								id="message"
								placeholder="Just write everything you want"
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
								send<img src={Farrow}></img>
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
