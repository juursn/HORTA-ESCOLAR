import "./App.css"
import { Route, BrowserRouter, Routes } from "react-router-dom"

import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/Home/Home"

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/HORTA-ESCOLAR" element={<Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}
