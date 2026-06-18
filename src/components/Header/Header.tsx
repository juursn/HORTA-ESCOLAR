import { useState } from "react"
import { pesquisa, menu, close } from "../../assets/index"
import { Li } from "../../components/li"

export const Header = () => {
	const [menu2, setMenu] = useState(false)

	const alternarMenu = () => {
		setMenu(!menu2)
	}

	return (
		<>
			<header className="fixed top-0 left-0 w-full z-50">
				<nav className="bg-white/70 backdrop-blur-md flex items-center h-12 justify-end gap-3.5 px-5">
					<div>
						<img src={pesquisa} alt="Pesquisar" className="cursor-pointer" />
					</div>

					<div id="menu">
						<img
							onClick={alternarMenu}
							src={menu2 ? close : menu}
							alt="Menu"
							className="cursor-pointer transition-transform duration-300"
							style={{
								transform: menu2 ? "rotate(90deg)" : "rotate(0deg)",
							}}
						/>
					</div>
				</nav>

				<div
					className={`bg-white/70 backdrop-blur-md w-full overflow-hidden transition-all duration-300 ease-in-out ${
						menu2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<ul className="px-6 pt-2 pb-6 space-y-4">
						<p className="text-sm font-normal bg-linear-to-r from-zinc-400 to-zinc-500 bg-clip-text text-transparent">
							Recomendações
						</p>

						<Li txt="Catálogo de plantas" caminho="" />
						<Li txt="Diagnóstico de plantas" caminho="" />
						<Li txt="Diagnóstico de pragas" caminho="" />
						<Li txt="Gestão da horta" caminho="" />
						<Li txt="Sobre o projeto" caminho="" />
					</ul>
				</div>
			</header>

			<main className="mt-12"></main>
		</>
	)
}
