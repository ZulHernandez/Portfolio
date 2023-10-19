import CoTitle from "../general/CoTitle";
import uam from "../../assets/imgs/vector/uam.svg";
import cecyt from "../../assets/imgs/vector/cecyt.svg";

let institutes = [
	{
		id: 1,
		name: "Google",
		logo: "/google.svg",
	},
	{
		id: 2,
		name: "Coursera",
		logo: "/coursera.svg",
	},
	{
		id: 3,
		name: "Educación IT",
		logo: "/it.svg",
	},
];

let cursos = [
	{
		id: 2,
		institution: [institutes[0], institutes[1]],
		date: "July 2022",
		nombre:
			"First steps in the UX design process: Empathize, define, and ideate",
		num: "SZPFQ7A2EZNS",
		link: "https://www.coursera.org/account/accomplishments/certificate/SZPFQ7A2EZNS",
	},
	{
		id: 3,
		institution: [institutes[0], institutes[1]],
		date: "July 2022",
		nombre: "Basic aspects of user experience design",
		num: "SEPLGR3N9YDA",
		link: "https://www.coursera.org/account/accomplishments/certificate/SEPLGR3N9YDA",
	},
	{
		id: 1,
		institution: [institutes[0], institutes[1]],
		date: "August 2022",
		nombre: "Create page layouts and low-fidelity prototypes",
		num: "6P9XDVNFUUJH",
		link: "https://coursera.org/share/d076e8e063b9539efafacc1780c63315",
	},
	{
		id: 4,
		institution: [institutes[2]],
		date: "August 2023",
		nombre: "React.JS Developer",
		num: "91334263297",
		link: "https://www.educacionit.com/perfil/saul-ulises-hernandez-cruz-913342/certificado/63297",
	},
];

let schools = [
	{
		id: 1,
		img: cecyt,
		inst: "CENTRO DE ESTUDIOS CIENTÍFICOS Y TECNOLÓGICOS #9",
		carrer: "Programming & Software Development Technician",
		date: "(2014-2017)",
		ced: "11787786",
		link: "https://www.buholegal.com/11787786/",
	},
	{
		id: 2,
		img: uam,
		inst: "UNIVERSIDAD AUTÓNOMA METROPOLITANA",
		carrer: "Graphic communication design bachelors degree",
		date: "(2018-2022)",
		ced: "13491124",
		link: "https://www.buholegal.com/13491124/",
	},
];

const CoInstLog = (props) => {
	return props.curso.map((inst) => {
		return (
			<>
				<img key={inst.id} src={inst.logo} />
				<span>{inst.id < props.curso.length ? "|" : ""}</span>
			</>
		);
	});
};

const CoInstName = (props) => {
	return props.curso.map((inst) => {
		return (
			<>
				<span key={inst.id}>{inst.name}</span>
				<span>{inst.id < props.curso.length ? "-" : ""}</span>
			</>
		);
	});
};

const CoCurso = () => {
	return cursos.map((curso) => {
		return (
			<div key={curso.id} className="card-course">
				<a rel="noreferrer" href={curso.link} target="_blank">
					<div className="card-course-logos">
						<CoInstLog curso={curso.institution} />
					</div>
					<br />
					<div>
						<div className="card-course-institutes">
							<CoInstName curso={curso.institution} />
						</div>
						<p className="card-course-date">{curso.date}</p>
					</div>
					<div className="card-course-dataB">
						<p className="card-course-name">{curso.nombre}</p>
						<p className="card-course-id">ID: {curso.num}</p>
					</div>
				</a>
			</div>
		);
	});
};

const CoSchool = () => {
	return schools.map((school) => {
		return (
			<div key={school.id} className="card-school">
				<div className="card-school-first">
					<img className="card-school-img" src={school.img}></img>
					<div className="card-school-studies">
						<p className="card-school-inst">{school.inst}</p>
						<p className="card-school-carrer">{school.carrer}</p>
					</div>
				</div>
				<div className="card-school-extra">
					<p className="card-school-date">{school.date}</p>
					<a
						target="_blank"
						rel="noreferrer"
						href={"https://www.buholegal.com/" + school.ced + ""}
					>
						<p className="card-school-ced">PROF. LIC.: {school.ced}</p>
					</a>
				</div>
			</div>
		);
	});
};

const CoEstudios = () => {
	let titles = ["Studies &", "courses"];

	return (
		<div
			style={{ zIndex: "2" }}
			className="dark mixN"
			id="studies-courses"
		>
			<CoTitle titles={titles} />
			<div className="div-content middle mixN">
				<div className="cont-schools">
					<CoSchool />
				</div>
				<div className="cont-courses">
					<CoCurso />
				</div>
			</div>
		</div>
	);
};

export default CoEstudios;
