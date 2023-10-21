import CoTitle from "../general/CoTitle";
import CoInfoCard from "../general/CoInfoCard";

import research from "../../assets/imgs/liverpool/investigation.svg";
import toolkit from "../../assets/imgs/liverpool/toolkit.svg";
import lab from "../../assets/imgs/liverpool/lab.svg";
import metod from "../../assets/imgs/liverpool/metod.svg";
import metrics from "../../assets/imgs/liverpool/metrics.svg";
import production from "../../assets/imgs/liverpool/production.svg";
import invest from "../../assets/imgs/liverpool/invest.svg";
import bannerSales from "../../assets/imgs/liverpool/bannerSales.png";
import bannerPega from "../../assets/imgs/liverpool/bannerPega.png";
import bannerAtla from "../../assets/imgs/liverpool/bannerAtla.png";

const CoCardCopa = () => {
	let casos = [
		{
			id: 1,
			banner: bannerSales,
			title: "SalesForce",
			sub: "Lightning Design System",
			link: "https://www.lightningdesignsystem.com/",
		},
		{
			id: 2,
			banner: bannerPega,
			title: "Pega",
			sub: "Constellation Design System",
			link: "https://design.pega.com/design/design-tokens/",
		},
		{
			id: 3,
			banner: bannerAtla,
			title: "Atlasian",
			sub: "Atlasian Design System",
			link: "https://atlassian.design/tokens/design-tokens",
		},
	];

	return casos.map((caso) => {
		return (
			<div key={caso.id} className="caso-card">
				<img className="caso-card-img" src={caso.banner} alt={caso.title} />
				<div className="cont-caso-info">
					<h3>{caso.title}</h3>
					<p>{caso.sub}</p>
					<a href={caso.link} target="_blank" rel="noreferrer">
						Visit Design System
					</a>
				</div>
			</div>
		);
	});
};

const CoEngine = () => {
	let titles = ["Engineering"];

	let pasos = [
		{
			id: 1,
			icon: research,
			title: "1.- Research",
			description:
				"In-depth research was conducted on success stories and how other entities carried out these processes.",
		},
		{
			id: 2,
			icon: toolkit,
			title: "2.- Toolkit",
			description: "A selection of tools was made and each tool was described.",
		},
		{
			id: 3,
			icon: lab,
			title: "3.- Lab",
			description:
				"Tests were started on the chosen technologies and on the process of hypothesis from the research.",
		},
		{
			id: 4,
			icon: metod,
			title: "4.- Methodology",
			description:
				"It describes the way of working, problems and findings related to all the work processes to be used in this area.",
		},
		{
			id: 5,
			icon: metrics,
			title: "5.- Metrics",
			description:
				"Obtaining quantitative data related to time, performance and cost KPI's downstream from the laboratory.",
		},
		{
			id: 6,
			icon: production,
			title: "6.- Production",
			description:
				"Implementation of the processes and tools described in the methodology.",
		},
		{
			id: 7,
			icon: invest,
			title: "7.- Invest",
			description:
				"Evaluation and proposal of improvements for technological tools, processes and technological means within the initiative.",
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
				<div className="cont-steps">
					<CoInfoCard data={pasos} size="mini" />
				</div>
				<p className="monBs-dark">
					<h3 style={{ textAlign: "Left" }}>Investigation</h3>
					Another important part of my work within UX was the creation of the
					tokenization process of the GLUE design system. In this sense,
					everything concerning the conceptualization, methodology, process
					description, and process map related to the UX engineering process was
					done by me.
					<br /> The realization of this initiative involved the following
					steps:
				</p>
				<CoCardCopa />
			</div>
		</div>
	);
};

export default CoEngine;
