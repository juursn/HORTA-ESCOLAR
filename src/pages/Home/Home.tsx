import {
	alimenticia,
	carnivora,
	medicinal,
	ornamental,
} from "../../assets/catalogo-home/index"
import { dianaPNG } from "../../assets/icons/index"
import { Cards } from "../../components/Cards"
import { DivCatalogo } from "../../components/divCatalogo"

export const Home = () => {
	return (
		<>
			<main className="mt-12 flex-1">
				{/* == BANNER PRINCIPAL == */}
				<h1 className="bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
					Horta Escolar Digital
				</h1>
				<section className="flex items-center justify-center px-3 bg-[#F5F5F773]">
					<img src={dianaPNG} alt="Diana" />
					<Cards
						textos={[
							"A Horta Escolar Digital é uma plataforma interativa criada para aproximar tecnologia, educação e sustentabilidade.",

							"Os alunos podem acompanhar o crescimento das plantas e registrar informações importantes da horta.",

							"A plataforma incentiva práticas sustentáveis e fortalece a educação ambiental nas escolas.",
						]}
					/>
				</section>
				{/* == CATÁLOGO DE PLANTAS == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
						Catálogo de plantas
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
						<DivCatalogo
							txt="Alimentícia"
							caminho="/HORTA-ESCOLAR/ALIMENTICIAS"
							imagem={alimenticia}
						/>
						<DivCatalogo
							txt="Medicinal"
							caminho="/HORTA-ESCOLAR/MEDICINAIS"
							imagem={medicinal}
						/>
						<DivCatalogo
							txt="Ornamentar"
							caminho="/HORTA-ESCOLAR/ORNAMENTAIS"
							imagem={ornamental}
						/>

						<DivCatalogo
							txt="Carnívora"
							caminho="/HORTA-ESCOLAR/CARNIVORAS"
							imagem={carnivora}
						/>
					</div>
				</section>
			</main>
		</>
	)
}
