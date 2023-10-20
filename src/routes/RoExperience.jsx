import { useContext } from "react";
import { MyContext } from "../components/context/MyContext";
import CoHome from "../components/experience/CoHome";
import CoProject from "../components/experience/CoProject";

import "../styles/experience.css";

const RoExperience = () =>{

    const { setRuta } = useContext(MyContext);
    setRuta("/experience");

    return(
        <>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<CoHome />
                <CoProject />
			</div>
        </>
    );
}
export default RoExperience;