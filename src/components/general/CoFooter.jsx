import sign from "/BNsign.svg";

let footOptions = [
	{
		id: 1,
		title: "Get in touch",
		options: [
			{
				id: 1,
				text: "(+52) 55-6502-7645",
				type: "tel:",
				link: "+525565027645",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "saululiseshernandezcruz@gmail.com",
				type: "mailto:",
				link: "saululiseshernandezcruz@gmail.com",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "@ZulHernandezC",
				type: "",
				link: "https://t.me/ZulHernandezC",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "Schedule your appointment!",
				type: "",
				link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IHfVcWon0GCIlKQNx98HMtHPHf_UV5dvAJD88J-6lr3AS9z3heiAl9kd_KvBRN88H2-5mS9VQ",
				anchor: "_blank",
			},
		],
	},
	{
		id: 2,
		title: "MORE SPACES",
		options: [
			{
				id: 1,
				text: "LinkedIn (Saúl Ulises Hernández Cruz)",
				type: "",
				link: "https://www.linkedin.com/in/saululises/",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "Behance (zulhernndez)",
				type: "",
				link: "https://www.behance.net/zulhernndez",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "Sketchfab (Zul Hernández)",
				type: "",
				link: "https://sketchfab.com/zulHernandez1912",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "GitHub (ZulHernandez)",
				type: "",
				link: "https://github.com/ZulHernandez",
				anchor: "_blank",
			},
			{
				id: 5,
				text: "ISSUU (Saúl Hernández)",
				type: "",
				link: "https://issuu.com/nhoro",
				anchor: "_blank",
			},
		],
	},
	{
		id: 3,
		title: "Site map",
		options: [
			{
				id: 1,
				text: "Resume",
				type: "",
				link: "/",
				anchor: "",
			},
			{
				id: 2,
				text: "Experience",
				type: "",
				link: "/experience",
				anchor: "",
			},
		],
	},
	{
		id: 4,
		title: "Page Map",
		options: [
			{
				id: 1,
				text: "About me",
				type: "",
				link: "/#about-me",
				anchor: "",
			},
			{
				id: 2,
				text: "Studies & courses",
				type: "",
				link: "/#studies-courses",
				anchor: "",
			},
			{
				id: 3,
				text: "Experience & projects",
				type: "",
				link: "/#experience-projects",
				anchor: "",
			},
			{
				id: 4,
				text: "Get in touch",
				type: "",
				link: "/#get-in-touch",
				anchor: "",
			},
		],
	},
];

let footOptionsExp = [
	{
		id: 1,
		title: "Get in touch",
		options: [
			{
				id: 1,
				text: "(+52) 55-6502-7645",
				type: "tel:",
				link: "+525565027645",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "saululiseshernandezcruz@gmail.com",
				type: "mailto:",
				link: "saululiseshernandezcruz@gmail.com",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "@ZulHernandezC",
				type: "",
				link: "https://t.me/ZulHernandezC",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "Schedule your appointment!",
				type: "",
				link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IHfVcWon0GCIlKQNx98HMtHPHf_UV5dvAJD88J-6lr3AS9z3heiAl9kd_KvBRN88H2-5mS9VQ",
				anchor: "_blank",
			},
		],
	},
	{
		id: 2,
		title: "MORE SPACES",
		options: [
			{
				id: 1,
				text: "LinkedIn (Saúl Ulises Hernández Cruz)",
				type: "",
				link: "https://www.linkedin.com/in/saululises/",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "Behance (zulhernndez)",
				type: "",
				link: "https://www.behance.net/zulhernndez",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "Sketchfab (Zul Hernández)",
				type: "",
				link: "https://sketchfab.com/zulHernandez1912",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "GitHub (ZulHernandez)",
				type: "",
				link: "https://github.com/ZulHernandez",
				anchor: "_blank",
			},
			{
				id: 5,
				text: "ISSUU (Saúl Hernández)",
				type: "",
				link: "https://issuu.com/nhoro",
				anchor: "_blank",
			},
		],
	},
	{
		id: 3,
		title: "Site map",
		options: [
			{
				id: 1,
				text: "Resume",
				type: "",
				link: "/",
				anchor: "",
			},
			{
				id: 2,
				text: "Experience",
				type: "",
				link: "/experience",
				anchor: "",
			},
		],
	},
	{
		id: 4,
		title: "Experiences",
		options: [
			{
				id: 1,
				text: "Liverpool",
				type: "",
				link: "/#about-me",
				anchor: "",
			},
			{
				id: 2,
				text: "HUBBUB",
				type: "",
				link: "/#studies-courses",
				anchor: "",
			},
			{
				id: 3,
				text: "Gook Óptica",
				type: "",
				link: "/#experience-projects",
				anchor: "",
			},
		],
	},
];

const CoFootOption = (props) => {
	let array;
	props.ruta == "/" ? array=footOptions : array=footOptionsExp
	return array.map((footOption) => {
		return (
			<div key={footOption.id} className="cont-footer-card">
				<h4>{footOption.title}</h4>
				<div className="cont-footer-card-text">
					{footOption.options.map((option) => {
						return (
							<a
								key={option.id}
								href={option.type + option.link}
								target={option.anchor}
								rel="noreferrer"
							>
								<p>{option.text}</p>
							</a>
						);
					})}
				</div>
			</div>
		);
	});
};

const CoFootMap = () => {
	return (
		<div className="cont-footer">
			<CoFootOption />
			<img className="cont-footer-img" src={sign} alt="Sign" />
		</div>
	);
};

const CoCopy = () => {
	return (
		<div className="cont-copy">
			We value your privacy and the trust you place in us. The personal
			information you provide us, such as your name and email, will not be used
			for any commercial purpose. We will only use this information to
			communicate with you and provide you with the services you have requested.
			If you have any questions or concerns about our privacy practices, please
			do not hesitate to contact us.
		</div>
	);
};

const CoFooter = () => {
	return (
		<div className="foot">
			<CoFootMap />
			<CoCopy />
		</div>
	);
};

export default CoFooter;
