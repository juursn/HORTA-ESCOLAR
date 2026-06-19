import { Cards } from "../../components/Cards"
import { DivCatalogo } from "../../components/divCatalogo"
import { dianaPNG } from "../../assets/icons/index"
import {
	aglaonema,
	azaleia,
	babosa,
	cactoOrelhaDeCoelho,
	comigoNinguemPode,
	costelaDeAdao,
	echeveria,
	girassol,
	hibisco,
	ipeAmarelo,
	jade,
	macanaDaSerra,
	maranta,
	margarida,
	murta,
	orquidea,
	palmeiraAreca,
	plantaJiboia,
	podocarpo,
	primaveraBougainvillea,
	rosaDePedra,
	rosa,
	samambaia,
	zebraHaworthia,
} from "../../assets/catalogo-ornamentais/index"
import { Voltar } from "../../components/Voltar"
export const Ornamentais = () => {
	return (
		<>
			<main className="mt-12 flex-1">
				{/* == BANNER PRINCIPAL == */}
				<h1 className="bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
					Plantas Ornamentais
				</h1>
				<section className="flex items-center justify-center px-3 bg-[#F5F5F773]">
					<img src={dianaPNG} alt="Diana" />
					<Cards
						textos={[
							"Bem-vindo ao catálogo de plantas ornamentais! Temos espécies que encantam pela beleza, tornando seu ambiente mais agradável. Temos...",

							"…opções de Flores Ornamentais, perfeitas para colorir jardins e ambientes com rosas, orquídeas, hibiscos, etc...",

							"Temos também Folhagens Ornamentais. Elas se destacam pelas formas e cores das folhas, como jiboias, samambaias, etc... ",

							"Contamos ainda com Cactos e Suculentas. São plantas resistentes e fáceis de cuidar, como jade, babosa, echeverias, etc...",

							"Há também Árvores e Arbustos Ornamentais. Eles valorizam jardins e áreas externas com espécies como ipês, primaveras, etc...",
						]}
					/>
				</section>

				{/* == CATÁLOGO: Flores Ornamentais == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
						Flores Ornamentais
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
						<DivCatalogo txt="Rosa" caminho="" imagem={rosa} />
						<DivCatalogo txt="Orquídea" caminho="" imagem={orquidea} />
						<DivCatalogo txt="Hibisco" caminho="" imagem={hibisco} />
						<DivCatalogo txt="Girassol" caminho="" imagem={girassol} />
						<DivCatalogo txt="Azaleia" caminho="" imagem={azaleia} />
						<DivCatalogo txt="Margarida" caminho="" imagem={margarida} />
					</div>
				</section>

				{/* == CATÁLOGO: Folhagens Ornamentais == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
						Folhagens Ornamentais
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
						<DivCatalogo txt="Planta Jiboia" caminho="" imagem={plantaJiboia} />
						<DivCatalogo
							txt="Costela-de-Adão"
							caminho=""
							imagem={costelaDeAdao}
						/>
						<DivCatalogo txt="Samambaia" caminho="" imagem={samambaia} />
						<DivCatalogo
							txt="comigo-ninguém-pode"
							caminho=""
							imagem={comigoNinguemPode}
						/>
						<DivCatalogo txt="Maranta" caminho="" imagem={maranta} />
						<DivCatalogo txt="Aglaonema" caminho="" imagem={aglaonema} />
					</div>
				</section>

				{/* == CATÁLOGO: Cactos e Suculentas == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
						Cactos e Suculentas
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
						<DivCatalogo txt="Babosa" caminho="" imagem={babosa} />
						<DivCatalogo txt="Rosa-de-pedra" caminho="" imagem={rosaDePedra} />
						<DivCatalogo txt="Jade" caminho="" imagem={jade} />
						<DivCatalogo
							txt="Cacto-orelha-de-coelho"
							caminho=""
							imagem={cactoOrelhaDeCoelho}
						/>
						<DivCatalogo txt="Echeveria" caminho="" imagem={echeveria} />
						<DivCatalogo
							txt="Zebra (Haworthia)"
							caminho=""
							imagem={zebraHaworthia}
						/>
					</div>
				</section>

				{/* == CATÁLOGO: Árvores e Arbustos Ornamentais == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl">
						Árvores e Arbustos Ornamentais
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
						<DivCatalogo txt="Ipê-amarelo" caminho="" imagem={ipeAmarelo} />
						<DivCatalogo
							txt="Manacá-da-serra"
							caminho=""
							imagem={macanaDaSerra}
						/>
						<DivCatalogo
							txt="Primavera (Bougainvillea)"
							caminho=""
							imagem={primaveraBougainvillea}
						/>
						<DivCatalogo txt="Murta" caminho="" imagem={murta} />
						<DivCatalogo
							txt="Palmeira-areca"
							caminho=""
							imagem={palmeiraAreca}
						/>
						<DivCatalogo txt="Podocarpo" caminho="" imagem={podocarpo} />
					</div>
				</section>
				<Voltar caminho="/HORTA-ESCOLAR/" />
			</main>
		</>
	)
}
