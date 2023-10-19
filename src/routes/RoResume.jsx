import CoLeftNav from "../components/resume/CoLeftNav";
import CoHome from "../components/resume/CoHome";
import CoEstudios from "../components/resume/CoEstudios";
import CoExperiencia from "../components/resume/CoExperiencia";
import CoContact from "../components/resume/CoContact";

import { useContext } from "react";
import { MyContext } from "../components/context/MyContext";


const RoResume = () => {
	const { setRuta } = useContext(MyContext);
    setRuta("/");

	return (
		<>
			<CoLeftNav />
			<div style={{ display: "flex", flexDirection: "column" }}>
				<CoHome />
				<CoEstudios />
				<CoExperiencia />
				<CoContact />
			</div>
		</>
	);
};

export default RoResume;
