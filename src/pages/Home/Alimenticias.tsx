import { Cards } from "../../components/Cards"
import { DivCatalogo } from "../../components/divCatalogo"
import { dianaPNG } from "../../assets/icons/index"
import {
	alface,
	alho,
	batata,
	beldroega,
	capuchinha,
	cenoura,
	couve,
	oraProNobis,
	peixinhoDaHorta,
	serralha,
	taioba,
	tomate,
} from "../../assets/catalogo-alimenticia/index"
import { Voltar } from "../../components/Voltar"

export const Alimenticias = () => {
	return (
		<>
			<main className="mt-12 flex-1">
				{/* == BANNER PRINCIPAL == */}
				<h1 className="bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
					Plantas Alimentícias
				</h1>
				<section className="flex items-center justify-center px-3 bg-[#F5F5F773]">
					<img src={dianaPNG} alt="Diana" />
					<Cards
						textos={[
							"Bem vindo ao catalogo de plantas alimentícias!Todas as plantas que você pode comer e, por causa do comércio atual, são divididas em..",

							"As convencionais são as celebridades do supermercado que todo mundo conhece, como alface e tomate!",

							"As não convencionais são vegetais supernutritivos que esquecemos no dia a dia, e que crescem sozinhas no quintal!",
						]}
					/>
				</section>
				{/* == CATÁLOGO DE PLANTAS **Convencionais** == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
						Convencionais
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
						<DivCatalogo txt="Alface" caminho="" imagem={alface} />
						<DivCatalogo txt="Tomate" caminho="" imagem={tomate} />
						<DivCatalogo txt="Cenoura" caminho="" imagem={cenoura} />
						<DivCatalogo txt="Batata" caminho="" imagem={batata} />
						<DivCatalogo txt="Couve" caminho="" imagem={couve} />
						<DivCatalogo txt="Alho" caminho="" imagem={alho} />
					</div>
				</section>
				{/* == CATÁLOGO DE PLANTAS **NÃO Convencionais** == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
						Não Convencionais
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
						<DivCatalogo txt="Ora-pro-nóbis" caminho="" imagem={oraProNobis} />
						<DivCatalogo
							txt="Peixinho-da-horta"
							caminho=""
							imagem={peixinhoDaHorta}
						/>
						<DivCatalogo txt="Taioba" caminho="" imagem={taioba} />
						<DivCatalogo txt="Beldroega" caminho="" imagem={beldroega} />
						<DivCatalogo txt="Serralha" caminho="" imagem={serralha} />
						<DivCatalogo txt="Capuchinha" caminho="" imagem={capuchinha} />
					</div>
				</section>
				<Voltar caminho="/HORTA-ESCOLAR/" />
			</main>
		</>
	)
}
