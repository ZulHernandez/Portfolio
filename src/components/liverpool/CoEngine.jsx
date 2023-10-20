import CoTitle from "../general/CoTitle";
import CoInfoCard from "../general/CoInfoCard";

import research from "../../assets/imgs/liverpool/investigation.svg";

const CoEngine = () => {
	let titles = ["Engineering"];

	let pasos = [
		{
			id: 1,
			icon: research,
			title: "1.- Research",
			descripcion:
				"In-depth research was conducted on success stories and how other entities carried out these processes.",
		},
	];

	return (
		<div style={{ zIndex: "4" }}>
			<CoTitle titles={titles} space="-body" color="#833177" />
			<div className="div-content middle-body">
				<p className="monBs-dark">
					Another important part of my work within UX was the creation of the
					tokenization process of the GLUE design system. In this sense,
					everything concerning the conceptualization, methodology, process
					description, and process map related to the UX engineering process was
					done by me.
					<br /> The realization of this initiative involved the following
					steps:
				</p>
				<CoInfoCard data={pasos} />
			</div>
		</div>
	);
};

export default CoEngine;
