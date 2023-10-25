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

import figma from "../../assets/imgs/liverpool/figma.svg";
import figmaApi from "../../assets/imgs/liverpool/figmaApi.svg";
import styleD from "../../assets/imgs/liverpool/styleD.svg";
import javaS from "../../assets/imgs/liverpool/javaS.svg";
import bash from "../../assets/imgs/liverpool/bash.svg";
import node from "../../assets/imgs/liverpool/node.svg";
import react from "../../assets/imgs/liverpool/react.svg";
import gitHub from "../../assets/imgs/liverpool/gitHub.svg";
import npm from "../../assets/imgs/liverpool/npm.svg";

const CoTech = () => {
	let tecs = [
		{
			id: 1,
			logo: figma,
			name: "Figma",
		},
		{
			id: 2,
			logo: figmaApi,
			name: "Figma API",
		},
		{
			id: 3,
			logo: styleD,
			name: "Style Dictionary",
		},
		{
			id: 4,
			logo: javaS,
			name: "JavaScript",
		},
		{
			id: 5,
			logo: bash,
			name: "Bash",
		},
		{
			id: 6,
			logo: node,
			name: "Node JS",
		},
		{
			id: 7,
			logo: react,
			name: "React",
		},
		{
			id: 8,
			logo: gitHub,
			name: "GitHub",
		},
		{
			id: 9,
			logo: npm,
			name: "NPM",
		},
	];

	return tecs.map((tec) => {
		return (
			<div key={tec.id} className="tec-card">
				<img className="tec-card-img" src={tec.logo} alt={tec.name} />
				<p className="tec-card-title">{tec.name}</p>
			</div>
		);
	});
};

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
			<a key={caso.id} href={caso.link} target="_blank" rel="noreferrer">
				<div className="caso-card">
					<img className="caso-card-img" src={caso.banner} alt={caso.title} />
					<div className="caso-card-info">
						<div>
							<h3>{caso.title}</h3>
							<p>{caso.sub}</p>
						</div>
						<p className="">
							{caso.link}
						</p>
					</div>
				</div>
			</a>
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
				<div className="cont-caso">
					<CoCardCopa />
				</div>
				<p className="monBs-dark">
					<h3 style={{ textAlign: "Left" }}>Tools</h3>
					Once the success stories have been reviewed and the different ways in
					which these companies solved the various problems that arise during
					the application of these processes within their design systems have
					been investigated, these specific work tools were arrived at:
				</p>
				<div className="cont-tec">
					<CoTech />
				</div>
			</div>
		</div>
	);
};

export default CoEngine;
