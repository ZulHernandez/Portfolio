import sign from "/sign.svg";
import signGrey from "/Greysign.svg";
import bnBehance from "../../assets/imgs/vector/bn-behance.svg";
import bnGit from "../../assets/imgs/vector/bn-git.svg";
import bnIssuu from "../../assets/imgs/vector/bn-issuu.svg";
import bnLink from "../../assets/imgs/vector/bn-link.svg";
import bnSketch from "../../assets/imgs/vector/bn-sketch.svg";
import clBehance from "../../assets/imgs/vector/color-behance.svg";
import clGit from "../../assets/imgs/vector/color-git.svg";
import clIssuu from "../../assets/imgs/vector/color-issuu.svg";
import clLink from "../../assets/imgs/vector/color-link.svg";
import clSketch from "../../assets/imgs/vector/color-sketch.svg";
import bnCalendario from "../../assets/imgs/vector/bn-Calendar.svg";
import cCalendario from "../../assets/imgs/vector/color-Calendar.svg";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../components/context/MyContext";

//* Redes sociales
let redes = [
	{
		id: 1,
		name: "Behance",
		bn: bnBehance,
		cl: clBehance,
		link: "https://www.behance.net/zulhernndez",
	},
	{
		id: 2,
		name: "GitHub",
		bn: bnGit,
		cl: clGit,
		link: "https://github.com/ZulHernandez",
	},
	{
		id: 3,
		name: "ISSUU",
		bn: bnIssuu,
		cl: clIssuu,
		link: "https://issuu.com/nhoro",
	},
	{
		id: 4,
		name: "LinkedIn",
		bn: bnLink,
		cl: clLink,
		link: "https://www.linkedin.com/in/saululises/",
	},
	{
		id: 5,
		name: "Sketchfab",
		bn: bnSketch,
		cl: clSketch,
		link: "https://sketchfab.com/zulHernandez1912",
	},
	{
		id: 6,
		name: "Google Calendar",
		bn: bnCalendario,
		cl: cCalendario,
		link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IHfVcWon0GCIlKQNx98HMtHPHf_UV5dvAJD88J-6lr3AS9z3heiAl9kd_KvBRN88H2-5mS9VQ",
	},
];

//* Componente de redes sociales
const CoRedes = (props) => {
	return redes.map((red) => {
		return (
			<a key={red.id} rel="noreferrer" href={red.link} target="_blank">
				<img loading="lazy"
					className="nav-link-icons clickable"
					src={red.bn}
					onMouseOver={(e) => (e.currentTarget.src = red.cl)}
					onMouseOut={(e) => (e.currentTarget.src = red.bn)}
					alt={props.name}
				/>
			</a>
		);
	});
};

//* Componente del header
const CoNav = () => {

	const {ruta, language, setLanguage } = useContext(MyContext);

	return (
		<div className="nav-header">
			<div className="container-nav-link-left">
				<Link to="/">
					<img loading="lazy" src={ruta == "/" ? sign : signGrey} alt="sign" />
				</Link>
				<span className="nav-link">|</span>
				<Link to="/experience">
					<span
						className={
							ruta == "/"
								? "nav-link-inactive nav-link clickable"
								: "nav-link-active nav-link clickable"
						}
					>
						{language == "EN" ? "Experience" : "Experiencia"}
					</span>
				</Link>
			</div>
			<div className="container-nav-link-right">
				<div className="container-nav-link-right-media">
					<CoRedes />
				</div>
				<div className="container-nav-link-right-media">
					<span
						className={
							language == "ES"
								? "nav-link-inactive nav-link clickable"
								: "nav-link-active nav-link clickable"
						}
						onClick={() => setLanguage("EN")}
					>
						EN
					</span>
					<span className="nav-link">|</span>
					<span
						className={
							language == "EN"
								? "nav-link-inactive nav-link clickable"
								: "nav-link-active nav-link clickable"
						}
						onClick={() => setLanguage("ES")}
					>
						ES
					</span>
				</div>
			</div>
		</div>
	);
};

export default CoNav;
