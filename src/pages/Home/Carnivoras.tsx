import { Cards } from "../../components/Cards"
import { DivCatalogo } from "../../components/divCatalogo"
import { dianaPNG } from "../../assets/icons/index"
import {
	droseraChrysolepis,
	droseraCommunis,
	droseraGrantsaui,
	droseraMontana,
	droseraTomentosa,
	droseraVilosa,
	heliamphoraIonasi,
	heliamphoraCiliata,
	heliamphoraHeterodoxa,
	heliamphoraMinor,
	heliamphoraNutans,
	heliamphoraPulchella,
	utriculariaAmethystina,
	utriculariaFoliosa,
	utriculariaGibba,
	utriculariaHispida,
	utriculariaReniformis,
	utriculariaTricolor,
} from "../../assets/catalogo-carnivoras/index"
import { Voltar } from "../../components/Voltar"
export const Carnivoras = () => {
	return (
		<>
			<main className="mt-12 flex-1">
				{/* == BANNER PRINCIPAL == */}
				<h1 className="bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
					Plantas Carnívoras
				</h1>
				<section className="flex items-center justify-center px-3 bg-[#F5F5F773]">
					<img src={dianaPNG} alt="Diana" />
					<Cards
						textos={[
							"Bem-vindo ao catálogo de plantas carnívoras! Aqui estão espécies que capturam pequenos insetos para se nutrir. Temos...",

							"…espécies com Folhas Pegajosas. Prendendo insetos em gotículas adesivas, como as droseras encontradas no Brasil, etc...",

							"Temos também plantas de Armadilha em Jarro. Elas atraem presas para recipientes naturais onde ocorre a digestão, etc...",

							"Há ainda espécies de Sucção Aquática. Elas capturam pequenos organismos em ambientes úmidos e aquáticos, etc...",
						]}
					/>
				</section>
				{/* == CATÁLOGO: Plantas com Folhas Pegajosas == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
						Plantas com Folhas Pegajosas
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
						<DivCatalogo
							txt="Drosera communis"
							caminho=""
							imagem={droseraCommunis}
						/>
						<DivCatalogo
							txt="Drosera montana"
							caminho=""
							imagem={droseraMontana}
						/>
						<DivCatalogo
							txt="Drosera grantsaui"
							caminho=""
							imagem={droseraGrantsaui}
						/>
						<DivCatalogo
							txt="Drosera villosa"
							caminho=""
							imagem={droseraVilosa}
						/>
						<DivCatalogo
							txt="Drosera chrysolepis"
							caminho=""
							imagem={droseraChrysolepis}
						/>
						<DivCatalogo
							txt="Drosera tomentosa"
							caminho=""
							imagem={droseraTomentosa}
						/>
					</div>
				</section>

				{/* == CATÁLOGO: Plantas de Armadilha em Jarro == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
						Plantas de Armadilha em Jarro
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
						<DivCatalogo
							txt="Heliamphora heterodoxa"
							caminho=""
							imagem={heliamphoraHeterodoxa}
						/>
						<DivCatalogo
							txt="Heliamphora minor"
							caminho=""
							imagem={heliamphoraMinor}
						/>
						<DivCatalogo
							txt="Heliamphora nutans"
							caminho=""
							imagem={heliamphoraNutans}
						/>
						<DivCatalogo
							txt="Heliamphora ionasi"
							caminho=""
							imagem={heliamphoraIonasi}
						/>
						<DivCatalogo
							txt="Heliamphora pulchella"
							caminho=""
							imagem={heliamphoraPulchella}
						/>
						<DivCatalogo
							txt="Heliamphora ciliata"
							caminho=""
							imagem={heliamphoraCiliata}
						/>
					</div>
				</section>

				{/* == CATÁLOGO: Plantas de Sucção Aquática == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
						Plantas de Sucção Aquática
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
						<DivCatalogo
							txt="Utricularia reniformis"
							caminho=""
							imagem={utriculariaReniformis}
						/>
						<DivCatalogo
							txt="Utricularia gibba"
							caminho=""
							imagem={utriculariaGibba}
						/>
						<DivCatalogo
							txt="Utricularia foliosa"
							caminho=""
							imagem={utriculariaFoliosa}
						/>
						<DivCatalogo
							txt="Utricularia tricolor"
							caminho=""
							imagem={utriculariaTricolor}
						/>
						<DivCatalogo
							txt="Utricularia hispida"
							caminho=""
							imagem={utriculariaHispida}
						/>
						<DivCatalogo
							txt="Utricularia amethystina"
							caminho=""
							imagem={utriculariaAmethystina}
						/>
					</div>
				</section>

				<Voltar caminho="/HORTA-ESCOLAR/" />
			</main>
		</>
	)
}
