import CoTitle from "../general/CoTitle";
import CoInfoCard from "../general/CoInfoCard";

import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import useless from "../../assets/imgs/hubbub/research/useless.svg";
import invicible from "../../assets/imgs/hubbub/research/invicible.svg";
import ignorance from "../../assets/imgs/hubbub/research/ignorance.svg";
import noise from "../../assets/imgs/hubbub/research/noise.svg";
import datav from "../../assets/imgs/hubbub/research/datas.svg";
import user from "../../assets/imgs/hubbub/research/user.svg";

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
			</div>
		</div>
	);
};

export default CoResPri;
