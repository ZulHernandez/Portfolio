import logo from "../assets/imgs/hubbub/logo.svg";
import logoName from "../assets/imgs/hubbub/logoName.svg";
import banner from "../assets/imgs/hubbub/banner.svg";
import subc from "../assets/imgs/vector/companies/CUAM.svg";
import { useContext } from "react";
import { MyContext } from "../components/context/MyContext";

import "../styles/hubbub.css";

import CoHero from "../components/general/CoHero";
import CoPuesto from "../components/hubbub/CoPuesto";
import CoResPri from "../components/hubbub/CoResPri";

const RoHubbub = () => {
	const { language, setRuta } = useContext(MyContext);
    setRuta("/experience");
	return (
		<div
			style={{ display: "flex", flexDirection: "column" }}
			className="hubbub"
		>
			<CoHero
				logo={logo}
				logoName={logoName}
				company="HUBBUB"
				role={language == "EN" ? "UX/UI designer & developer" : "Diseñador y desarrolaldor UX/UI"}
				tags={language == "EN" ? ["project", "design", "programming"] : ["proyecto", "diseño", "programación"]}
				subc={subc}
				banner={banner}
			/>
            <CoPuesto />
			<CoResPri />
			<center>
				<hr className="line-liver" />
			</center>
		</div>
	);
};
export default RoHubbub;
