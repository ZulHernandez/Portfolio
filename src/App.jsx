import { MyContext } from "./components/context/MyContext";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import RoResume from "./routes/RoResume";
import RoExperience from "./routes/RoExperience";
import RoLiverpool from "./routes/RoLiverpool";
import CoNav from "./components/general/CoNav";
import CoFooter from "./components/general/CoFooter";

function App() {
	const [posicion, setPosicion] = useState(1);
	const [ruta, setRuta] = useState("/");

	return (
		<>
			<MyContext.Provider value={{ posicion, setPosicion, ruta, setRuta}}>
				<CoNav ruta={ruta} />
				<Routes>
					<Route path="/" element={<RoResume />} />
					<Route path="/experience" element={<RoExperience/>} />
					<Route path="/experience/liverpool" element={<RoLiverpool />} />
				</Routes>
				<CoFooter ruta={ruta} />
			</MyContext.Provider>
		</>
	);
}

export default App;
