import { Cards } from "../../components/Cards"
import { DivCatalogo } from "../../components/divCatalogo"
import { Voltar } from "../../components/Voltar"
import { dianaPNG } from "../../assets/icons/index"
import {
	plantasConvencionais,
	plantasNaoConvencionais,
} from "../../data/plantasAlimenticias"

const h2Class =
	"bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl"

export const Alimenticias = () => {
	return (
		<main className="mt-12 flex-1">
			{/* BANNER */}
			<h1 className="bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
				Plantas Alimentícias
			</h1>

			<section className="flex items-center justify-center px-3 bg-[#F5F5F773]">
				<img src={dianaPNG} alt="Diana" />
				<Cards
					textos={[
						"Bem vindo ao catalogo de plantas alimentícias! Todas as plantas que você pode comer e, por causa do comércio atual, são divididas em...",
						"As convencionais são as celebridades do supermercado que todo mundo conhece, como alface e tomate!",
						"As não convencionais são vegetais supernutritivos que esquecemos no dia a dia, e que crescem sozinhas no quintal!",
					]}
				/>
			</section>

			{/* CONVENCIONAIS */}
			<section>
				<h2 className={h2Class}>Convencionais</h2>
				<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
					{plantasConvencionais.map(planta => (
						<DivCatalogo
							key={planta.txt}
							txt={planta.txt}
							imagem={planta.imagem}
							caminho={planta.caminho}
							nomeCientifico={planta.nomeCientifico}
							origem={planta.origem}
							ondeEncontra={planta.ondeEncontra}
						/>
					))}
				</div>
			</section>

			{/* NÃO CONVENCIONAIS */}
			<section>
				<h2 className={h2Class}>Não Convencionais</h2>
				<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]">
					{plantasNaoConvencionais.map(planta => (
						<DivCatalogo
							key={planta.txt}
							txt={planta.txt}
							imagem={planta.imagem}
							caminho={planta.caminho}
							nomeCientifico={planta.nomeCientifico}
							origem={planta.origem}
							ondeEncontra={planta.ondeEncontra}
						/>
					))}
				</div>
			</section>

			<Voltar caminho="/HORTA-ESCOLAR/" />
		</main>
	)
}
