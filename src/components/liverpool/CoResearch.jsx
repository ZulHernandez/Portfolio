import CoTitle from "../general/CoTitle";
import CoInfoCard from "../general/CoInfoCard";

import maze from "../../assets/imgs/liverpool/maze.svg";
import analytics from "../../assets/imgs/liverpool/analytics.svg";
import baymard from "../../assets/imgs/liverpool/baymard.svg";

let resTech = [
	{
		id: 1,
		icon: maze,
		description:
			"Creation of surveys and manipulation tests of prototypes with a first-hand approach.",
	},
	{
		id: 2,
		icon: analytics,
		description:
			"Collection of statistics related to the web products of the different Liverpool businesses.",
	},
	{
		id: 3,
		icon: baymard,
		description:
			"Consultation of specialized data in e-commerce and various services for world-class best practices.",
	},
];

const CoResearch = () => {
	const titles = ["Research"];
	return (
		<div className="MixN" style={{ zIndex: "3" }}>
			<CoTitle titles={titles} space="-body" />
			<div className="div-content middle-body dark">
				<p className="monBs">
					As a fundamental part of creating experience and interface solutions,
					the approach to the language and behavior of users is extremely
					important. For this, we make use of various sources of information
					that we integrate into our project life cycle. The presentation of
					these insights and information to stakeholders is key in defining
					flows. These are the tools we use:
				</p>
				<div className="cont-info">
					<CoInfoCard data={resTech} title="none" />
				</div>
				<p className="monBs">
					From this, different types of files, documents or formats are created
					for the presentation of these results. Thanks to documentation such as
					benchmarks, data visualizers, user journeys and even flow diagrams,
					they end up consolidating the UX and UI guides within the projects.
				</p>
			</div>
		</div>
	);
};
export default CoResearch;
