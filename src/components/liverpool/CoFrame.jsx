import CoTitle from "../general/CoTitle";

import { useState } from "react";

import arrow from "../../assets/imgs/vector/arrow.svg";
import ENatomH from "../../assets/imgs/liverpool/ENatomicDesign.svg";
import toyLogo from "../../assets/imgs/liverpool/brands/toys/logo.svg";
import toyName from "../../assets/imgs/liverpool/brands/toys/name.svg";
import toyMock from "../../assets/imgs/liverpool/brands/toys/mock.png";
import wilLogo from "../../assets/imgs/liverpool/brands/williams/logo.svg";
import wilName from "../../assets/imgs/liverpool/brands/williams/name.svg";
import wilMock from "../../assets/imgs/liverpool/brands/williams/mock.png";
import wesLogo from "../../assets/imgs/liverpool/brands/west/logo.svg";
import wesName from "../../assets/imgs/liverpool/brands/west/name.svg";
import wesMock from "../../assets/imgs/liverpool/brands/west/mock.png";
import gapLogo from "../../assets/imgs/liverpool/brands/gap/logo.svg";
import gapName from "../../assets/imgs/liverpool/brands/gap/name.svg";
import gapMock from "../../assets/imgs/liverpool/brands/gap/mock.png";
import livLogo from "../../assets/imgs/liverpool/brands/liverpool/logo.svg";
import livName from "../../assets/imgs/liverpool/brands/liverpool/name.svg";
import livMock from "../../assets/imgs/liverpool/brands/liverpool/mock.png";
import subLogo from "../../assets/imgs/liverpool/brands/suburbia/logo.svg";
import subName from "../../assets/imgs/liverpool/brands/suburbia/name.svg";
import subMock from "../../assets/imgs/liverpool/brands/suburbia/mock.png";
import banLogo from "../../assets/imgs/liverpool/brands/banana/logo.svg";
import banName from "../../assets/imgs/liverpool/brands/banana/name.svg";
import banMock from "../../assets/imgs/liverpool/brands/banana/mock.png";
import potLogo from "../../assets/imgs/liverpool/brands/pottery/logo.svg";
import potName from "../../assets/imgs/liverpool/brands/pottery/name.svg";
import potMock from "../../assets/imgs/liverpool/brands/pottery/mock.png";
import pokLogo from "../../assets/imgs/liverpool/brands/potteryK/logo.svg";
import pokName from "../../assets/imgs/liverpool/brands/potteryK/name.svg";
import pokMock from "../../assets/imgs/liverpool/brands/potteryK/mock.png";

const CoExpone = ({ marca }) => {
	return (
		<div className="cont-brands-show">
			<img className="cont-brands-show-mock" src={marca.mock} alt={marca.brand + " mock"} />
		</div>
	);
};

const CoBrandsCard = () => {
	let brands = [
		{
			brand: "Toys R Us",
			logo: toyLogo,
			name: toyName,
			mock: toyMock,
		},
		{
			brand: "Williams Sonoma",
			logo: wilLogo,
			name: wilName,
			mock: wilMock,
		},
		{
			brand: "West Elm",
			logo: wesLogo,
			name: wesName,
			mock: wesMock,
		},
		{
			brand: "GAP",
			logo: gapLogo,
			name: gapName,
			mock: gapMock,
		},
		{
			brand: "Liverpool",
			logo: livLogo,
			name: livName,
			mock: livMock,
		},
		{
			brand: "Suburbia",
			logo: subLogo,
			name: subName,
			mock: subMock,
		},
		{
			brand: "Banana Republic",
			logo: banLogo,
			name: banName,
			mock: banMock,
		},
		{
			brand: "Pottery Barn",
			logo: potLogo,
			name: potName,
			mock: potMock,
		},
		{
			brand: "Pottery Barn Kids",
			logo: pokLogo,
			name: pokName,
			mock: pokMock,
		},
		{
			brand: "Toys R Us",
			logo: toyLogo,
			name: toyName,
			mock: toyMock,
		},
		{
			brand: "Williams Sonoma",
			logo: wilLogo,
			name: wilName,
			mock: wilMock,
		},
		{
			brand: "West Elm",
			logo: wesLogo,
			name: wesName,
			mock: wesMock,
		},
		{
			brand: "GAP",
			logo: gapLogo,
			name: gapName,
			mock: gapMock,
		},
		{
			brand: "Liverpool",
			logo: livLogo,
			name: livName,
			mock: livMock,
		},
		{
			brand: "Suburbia",
			logo: subLogo,
			name: subName,
			mock: subMock,
		},
		{
			brand: "Banana Republic",
			logo: banLogo,
			name: banName,
			mock: banMock,
		},
		{
			brand: "Pottery Barn",
			logo: potLogo,
			name: potName,
			mock: potMock,
		},
		{
			brand: "Pottery Barn Kids",
			logo: pokLogo,
			name: pokName,
			mock: pokMock,
		},
	];

	const [brand, setBrand] = useState(0);

	return (
		<div className="cont-brands">
			<div className="cont-brands-sup">
				<div className="cont-brands-car">
					<img
						style={{ transform: "rotate(-90deg)" }}
						className="cont-brands-arrow clickable"
						src={arrow}
						onClick={() => {
							setBrand(brand > 1 ? brand - 1 : 9);
						}}
					/>
					<img id="b1" src={brands[0 + brand].logo} />
					<img id="b2" src={brands[1 + brand].logo} />
					<img id="b3" src={brands[2 + brand].logo} />
					<img id="b4" src={brands[3 + brand].logo} />
					<img id="b5" src={brands[4 + brand].logo} />
					<img id="b4" src={brands[5 + brand].logo} />
					<img id="b3" src={brands[6 + brand].logo} />
					<img id="b2" src={brands[7 + brand].logo} />
					<img id="b1" src={brands[8 + brand].logo} />
					<img
						style={{ transform: "rotate(90deg)" }}
						className="cont-brands-arrow clickable"
						src={arrow}
						onClick={() => {
							setBrand(brand < 8 ? brand + 1 : 0);
						}}
					/>
				</div>
				<img src={brands[4 + brand].name} alt={brands[4 + brand].brand} />
			</div>
			<CoExpone marca={brands[4 + brand]} />
		</div>
	);
};

const CoFrame = () => {
	const titles = ["Framework", "UI Design"];

	return (
		<div style={{ zIndex: "3" }}>
			<CoTitle titles={titles} space="-body" />
			<div className="div-content middle-body">
				<p className="monBs-dark">
					Due to the different businesses that exist within Liverpool, we work
					with a design system that first bases its construction on the Atomic
					Design methodology for the determination of its elements within a
					global library called GLUE.
				</p>
				<img className="img-atom" src={ENatomH} alt="atomic design" />
				<p className="monBs-dark">
					My job as a UXer is the maintenance, expansion, documentation, and
					application of GLUE within the different projects that UX attends. For
					the creation of improvements or other secondary businesses under
					Suburbia and Liverpool, they rely on UI Kits that take GLUE as a
					template. These are examples of the different businesses that operate
					within the port and their applications:
				</p>
				<CoBrandsCard />
			</div>
		</div>
	);
};

export default CoFrame;
