import CoTitle from "../general/CoTitle";
import CoInfoCard from "../general/CoInfoCard";

import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import PropTypes from "prop-types";

import useless from "../../assets/imgs/hubbub/research/useless.svg";
import invicible from "../../assets/imgs/hubbub/research/invicible.svg";
import ignorance from "../../assets/imgs/hubbub/research/ignorance.svg";
import noise from "../../assets/imgs/hubbub/research/noise.svg";
import datav from "../../assets/imgs/hubbub/research/datas.svg";
import user from "../../assets/imgs/hubbub/research/user.svg";

import circleFill from "../../assets/imgs/hubbub/research/legend/circleFill.svg";
import circleBorder from "../../assets/imgs/hubbub/research/legend/circleBorder.svg";
import squareFill from "../../assets/imgs/hubbub/research/legend/squareFill.svg";
import squareBorder from "../../assets/imgs/hubbub/research/legend/squareBorder.svg";
import triangleFill from "../../assets/imgs/hubbub/research/legend/triangleFill.svg";

let puntoGraphs = [
	{
		id: 1,
		title: "¿Cuál es tu rango de edad?",
		data: [
			{
				id: 1,
				title: "<15 años",
				value: 1,
				type: circleFill,
			},
			{
				id: 2,
				title: "15-24 años",
				value: 47,
				type: circleBorder,
			},
			{
				id: 3,
				title: "25-34 años",
				value: 13,
				type: squareFill,
			},
			{
				id: 4,
				title: "35-45 años",
				value: 6,
				type: squareBorder,
			},
			{
				id: 5,
				title: ">45 años",
				value: 1,
				type: triangleFill,
			},
		],
	},
	{
		id: 2,
		title: "¿Te interesa y crees inportante conocer el fenómeno del ruido?",
		data: [
			{
				id: 1,
				title: "Es importante y me es interesante",
				value: 50,
				type: circleFill,
			},
			{
				id: 2,
				title: "Es importante pero no me es interesante",
				value: 17,
				type: squareFill,
			},
			{
				id: 3,
				title: "Me es indiferente",
				value: 1,
				type: triangleFill,
			},
		],
	},
	{
		id: 3,
		title: "¿Has escuchado sobre el fenómeno del ruido?",
		data: [
			{
				id: 1,
				title: "Si lo he escuchado",
				value: 37,
				type: circleFill,
			},
			{
				id: 2,
				title: "No, nunca lo he escuchado",
				value: 31,
				type: circleBorder,
			},
		],
	},
];

let pointGraphs = [
	{
		id: 1,
		title: "What is your age range?",
		data: [
			{
				id: 1,
				title: "<15 years",
				value: 1,
				type: circleFill,
			},
			{
				id: 2,
				title: "15-24 years",
				value: 47,
				type: circleBorder,
			},
			{
				id: 3,
				title: "25-34 years",
				value: 13,
				type: squareFill,
			},
			{
				id: 4,
				title: "35-45 years",
				value: 6,
				type: squareBorder,
			},
			{
				id: 5,
				title: ">45 years",
				value: 1,
				type: triangleFill,
			},
		],
	},
	{
		id: 2,
		title:
			"Are you interested and do you think it is important to know the noise phenomenon?",
		data: [
			{
				id: 1,
				title: "It is important and interesting to me",
				value: 50,
				type: circleFill,
			},
			{
				id: 2,
				title: "It is important but not interesting to me",
				value: 17,
				type: squareFill,
			},
			{
				id: 3,
				title: "It is indifferent to me",
				value: 1,
				type: triangleFill,
			},
		],
	},
	{
		id: 3,
		title: "Have you heard about the noise phenomenon?",
		data: [
			{
				id: 1,
				title: "Yes, I have heard about it",
				value: 37,
				type: circleFill,
			},
			{
				id: 2,
				title: "No, I have never heard about it",
				value: 31,
				type: circleBorder,
			},
		],
	},
];

let barrasGraphs = [
	{
		id: 1,
		title: "¿Cómo te gusta conocer nuevos temas?",
		total: 202,
		data: [
			{
				id: 1,
				title: "Videos",
				value: 53,
			},
			{
				id: 2,
				title: "Artículos",
				value: 44,
			},
			{
				id: 3,
				title: "Museos",
				value: 41,
			},
			{
				id: 4,
				title: "Páginas web",
				value: 39,
			},
			{
				id: 5,
				title: "Conferencias",
				value: 24,
			},
			{
				id: 6,
				title: "Podcast",
				value: 1,
			},
		],
	},
	{
		id: 2,
		title: "¿Qué te gusta conocer?",
		total: 130,
		data: [
			{
				id: 1,
				title: "Consecuencias",
				value: 55,
			},
			{
				id: 2,
				title: "Causas",
				value: 45,
			},
			{
				id: 3,
				title: "Estadadística",
				value: 29,
			},
			{
				id: 4,
				title: "Soluciones",
				value: 1,
			},
		],
	},
];

let barsGraphs = [
	{
		id: 1,
		title: 
		"How do you like to learn about new topics?",
		total: 202,
		data: [
			{
				id: 1,
				title: "Videos",
				value: 53,
			},
			{
				id: 2,
				title: "Articles",
				value: 44,
			},
			{
				id: 3,
				title: "Museums",
				value: 41,
			},
			{
				id: 4,
				title: "Sites",
				value: 39,
			},
			{
				id: 5,
				title: 
				"Conferences",
				value: 24,
			},
			{
				id: 6,
				title: "Podcast",
				value: 1,
			},
		],
	},
	{
		id: 2,
		title: 
		"What do you like to know?",
		total: 130,
		data: [
			{
				id: 1,
				title: "Consecuences",
				value: 55,
			},
			{
				id: 2,
				title: "Aftermath",
				value: 45,
			},
			{
				id: 3,
				title: "Statistics",
				value: 29,
			},
			{
				id: 4,
				title: "Solutions",
				value: 1,
			},
		],
	},
];

const CoBars = ({ data, total }) => {
	return data.map((bar) => {
		return (
			<div className="bar" key={bar.id}>
				<span>{bar.id + ".- "}</span>
				<div className="bar-back">
					<div
						className="bar-front"
						style={{ width: (bar.value * 100 / total) + "%" }}
					></div>
				</div>
			</div>
		);
	});
};

const CoFigure = ({ data }) => {
	let figureArray = [];
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].value; j++) {
			let obj = {
				type: data[i].type,
			};
			figureArray.push(obj);
		}
	}

	return figureArray.map((figure) => {
		return <img src={figure.type} key={figureArray.indexOf(figure)} />;
	});
};

const CoLegend = ({ data, type }) => {
	return data.map((item) => {
		if (type == "figure") {
			return (
				<div className="legend-item" key={item.id}>
					<img src={item.type} alt={item.title} />
					<p>{item.title}</p>
				</div>
			);
		} else {
			return (
				<div className="legend-item" key={item.id}>
					<p>{item.id + ".- " + item.title}</p>
				</div>
			);
		}
	});
};

const CoGraph = ({ data, type, total }) => {
	if (type == "figure") {
		return <CoFigure data={data} />;
	}else{
		return <CoBars data={data} total={total} />;
	}
};

CoGraph.propTypes = {
	data: PropTypes.array.isRequired,
	type: PropTypes.string.isRequired,
	total: PropTypes.number,
};

const CoGraphs = ({ data, type }) => {
	return data.map((graph) => {
		return (
			<div className="graph-card" key={graph.id}>
				<h4>{graph.title}</h4>
				<div className={"graph-card-graph" + type}>
					<CoGraph type={type} data={graph.data} total={graph.total} />
				</div>
				<div className="graph-card-legend">
					<CoLegend type={type} data={graph.data} />
				</div>
			</div>
		);
	});
};

const CoProblems = () => {
	const { language } = useContext(MyContext);
	let problems = [
		{
			id: 1,
			title: "Useless",
			desc: "Data without output to the public",
			icon: useless,
		},
		{
			id: 2,
			title: "Invicible",
			desc: "Data without space to be seen",
			icon: invicible,
		},
		{
			id: 3,
			title: "Ignorance",
			desc: "Unawareness of noise",
			icon: ignorance,
		},
	];
	let problemas = [
		{
			id: 1,
			title: "Sin uso",
			desc: "Datos sin salida al publico",
			icon: useless,
		},
		{
			id: 2,
			title: "Invicibilidad",
			desc: "Datos sin espacio para ser vistos",
			icon: invicible,
		},
		{
			id: 3,
			title: "Ignorancia",
			desc: "Desconocimiento sobre el ruido",
			icon: ignorance,
		},
	];
	let data;

	language == "EN" ? (data = problems) : (data = problemas);

	return data.map((problem) => {
		return (
			<div className="problem-card" key={problem.id}>
				<img src={problem.icon} alt={problem.title} />
				<div>
					<h4>{problem.title}</h4>
					<p>{problem.desc}</p>
				</div>
			</div>
		);
	});
};

const CoResPri = () => {
	const { language } = useContext(MyContext);
	const titles = ["First line", "research"];
	const titulos = ["Investigación", "de primera línea"];

	let data = [
		{
			id: 1,
			title: "Noise",
			description: "Concepts and phenomena must be explored and understood",
			icon: noise,
		},
		{
			id: 2,
			title: "Data Visualization",
			description: "Use and communication of data",
			icon: datav,
		},
		{
			id: 3,
			title: "User",
			description: "Othernes as design and research compass",
			icon: user,
		},
	];

	return (
		<div className="MixN" style={{ zIndex: "3" }}>
			<CoTitle titles={language == "EN" ? titles : titulos} space="-body" />
			<div className="div-content middle-body darkHubbub">
				<p className="monBs">
					{language == "EN"
						? "The first part of the research related essentially to the approach to the user yielded the following results:"
						: "La primer parte de la investigación relacionada escencialmente con el acercamiento al usuario arrojaron los siguientes resultados:"}
				</p>
				<div className="cont-res">
					<div className="cont-problem">
						<CoProblems />
					</div>
					<div className="cont-sol">
						<CoInfoCard data={data} title="flex" size="" />
					</div>
				</div>
				<p className="monBs">
					{language == "EN"
						? "From this different types of files, documents or formats are created for the presentation of these results. Thanks to documentation such as benchmarks, data visualizers, user journeys and even flow diagrams, UX and UI guides end up consolidating within projects."
						: "Venido de esto diferentes tipos de archivos, documentos o formatos son creados para la presentación de estos resultados. Gracias a documentación como benchmarks, visualizadores de datos, user journeys  e incluso diagramas de flujo terminan por consolidar las guías de UX y UI dentro de los proyectos."}
				</p>
				<div className="cont-graph">
					<CoGraphs
						type="figure"
						data={language == "EN" ? pointGraphs : puntoGraphs}
					/>
				</div>
				<div className="cont-graph">
					<CoGraphs type="bars" data={language == "EN" ? barsGraphs : barrasGraphs} />
				</div>
			</div>
		</div>
	);
};

export default CoResPri;
