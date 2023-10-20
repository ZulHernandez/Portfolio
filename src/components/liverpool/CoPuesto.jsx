import CoInfoCard from "../general/CoInfoCard";
import CoTitle from "../general/CoTitle";

import research from "../../assets/imgs/liverpool/research.svg";
import framework from "../../assets/imgs/liverpool/framework.svg";
import design from "../../assets/imgs/liverpool/design.svg";
import prototype from "../../assets/imgs/liverpool/prototype.svg";
import code from "../../assets/imgs/liverpool/code.svg";

let actFocus = [
	{
		id: 1,
		icon: research,
		title: "Research",
		description: "User-centered research and testing for insight gathering.",
	},
	{
		id: 2,
		icon: framework,
		title: "Framework",
		description:
			"Maintenance and use of proprietary design libraries and frameworks.",
	},
	{
		id: 3,
		icon: design,
		title: "UI Design",
		description:
			"Creation of graphic solutions for interfaces of different kinds.",
	},
	{
		id: 4,
		icon: prototype,
		title: "UX prototype",
		description:
			"Presentation of user journeys and flows in interactive screens.",
	},
	{
		id: 5,
		icon: code,
		title: "Engineering",
		description:
			"Creación y mantenimiento de tokens, así como implementación de variables y APIs de diseño",
	},
];

const CoPuesto = () => {
	const titles = ["Role &", "Activities"];
	return (
		<div style={{ zIndex: "2"}}>
			<CoTitle titles={titles} space="-body" color="#833177" />
			<div className="div-content middle-body">
				<p className="monBs-dark">
					Given the magnitude and complexity of the projects within Liverpool,
					my activities as a Senior UI/UX designer were mainly focused on the
					following five points:
				</p>
				<div className="cont-info">
					<CoInfoCard data={actFocus} />
				</div>
				<p className="monBs-dark">
					Each of the activities described above are elaborated on in the rest
					of the information further down the page.
				</p>
			</div>
		</div>
	);
};

export default CoPuesto;
