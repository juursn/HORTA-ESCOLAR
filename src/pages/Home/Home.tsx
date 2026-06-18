import {
	alimenticia,
	carnivora,
	dianaPNG,
	medicinal,
	ornamental,
} from "../../assets/index"
import { DivCatalogo } from "../../components/divCatalogo"

export const Home = () => {
	return (
		<>
			<main>
				{/* == BANNER PRINCIPAL == */}
				<h1 className="bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent text-4xl">
					Horta Escolar Digital
				</h1>
				<section className="flex items-center px-3 bg-[#F5F5F773]">
					<img src={dianaPNG} alt="Diana" />
					<div className="bg-green-400 rounded-md h-fit py-4 px-2">
						<p>
							A Horta Escolar Digital é uma plataforma interativa criada para
							aproximar tecnologia, educação e sustentabilidade.
						</p>
					</div>
				</section>

				{/* == CATÁLOGO DE PLANTAS == */}
				<section className="bg[#F5F5F773]">
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl">
						Catálogo de plantas
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center">
						<DivCatalogo txt="Alimentícia" caminho="" imagem={alimenticia} />
						<DivCatalogo txt="Medicinal" caminho="" imagem={medicinal} />
						<DivCatalogo txt="Ornamentar" caminho="" imagem={ornamental} />
						<DivCatalogo txt="Carnívora" caminho="" imagem={carnivora} />
					</div>
				</section>
			</main>
		</>
	)
}
