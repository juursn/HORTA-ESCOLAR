import "./App.css"
import { Route, BrowserRouter, Routes } from "react-router-dom"

import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/Home"
import { Medicinais } from "./pages/Home/Medicinais"
import { Ornamentais } from "./pages/Home/Ornamentais"
import { Carnivoras } from "./pages/Home/Carnivoras"
import { Alimenticias } from "./pages/Home/Alimenticias"

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/HORTA-ESCOLAR" element={<Home />} />
					<Route
						path="/HORTA-ESCOLAR/ALIMENTICIAS"
						element={<Alimenticias />}
					/>
					<Route path="/HORTA-ESCOLAR/MEDICINAIS" element={<Medicinais />} />
					<Route path="/HORTA-ESCOLAR/ORNAMENTAIS" element={<Ornamentais />} />
					<Route path="/HORTA-ESCOLAR/CARNIVORAS" element={<Carnivoras />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}
