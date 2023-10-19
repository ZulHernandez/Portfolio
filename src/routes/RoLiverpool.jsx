import logo from "../assets/imgs/liverpool/logo.svg";
import logoName from "../assets/imgs/liverpool/logoName.svg";
import banner from "../assets/imgs/liverpool/banner.png";

import CoHero from "../components/general/CoHero";
import CoPuesto from "../components/liverpool/CoPuesto";
import CoResearch from "../components/liverpool/CoResearch";
import CoFrame from "../components/liverpool/CoFrame";

const RoLiverpool = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }} className="liverpool">
			<CoHero
				logo={logo}
				logoName={logoName}
				role="UX/UI senior designer"
				tags={["job", "design", "programming"]}
                subc={null}
                banner={banner}
			/>
			<CoPuesto />
			<CoResearch />
			<CoFrame />
		</div>
	);
};
export default RoLiverpool;
