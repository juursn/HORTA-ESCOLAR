import { Cards } from "../../components/Cards"
import { DivCatalogo } from "../../components/divCatalogo"
import { Voltar } from "../../components/Voltar"
import { dianaPNG } from "../../assets/icons/index"
import {
	plantasCalmantesESono,
	plantasDigestaoEEstomago,
	plantasGripeEImunidade,
	plantasAntiInflamatorias,
} from "../../data/plantasMedicinais"

const h2Class =
	"bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold"

const divClass =
	"text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773] p-4 rounded-xl"

export const Medicinais = () => {
	return (
		<main className="mt-12 flex-1">
			{/* BANNER */}
			<h1 className="bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
				Plantas Medicinais
			</h1>

			<section className="flex items-center justify-center px-3 bg-[#F5F5F773]">
				<img src={dianaPNG} alt="Diana" />
				<Cards
					textos={[
						"Bem vindo ao catalogo de plantas medicinais! Aqui estão todas as plantas que podem trazer benefícios a saúde humana, temos...",
						"...opções para Calmantes e Sono, ideais para relaxar a mente e combater a insônia com maracujá, camomila, etc...",
						"Temos soluções focadas em Digestão e Estômago. Elas são excelentes para aliviar o mal-estar, azia, os gases incômodos, etc...",
						"Também contamos com opções para Gripe e Imunidade. Elas ajudam a fortalecer as defesas do organismo e aliviar sintomas comuns, etc...",
						"Há ainda plantas com ação Anti-inflamatória. Elas auxiliam na redução de inflamações e desconfortos do dia a dia, etc...",
					]}
				/>
			</section>

			{/* CALMANTES E SONO */}
			<section>
				<h2 className={h2Class}>Calmantes e Sono</h2>
				<div className={divClass}>
					{plantasCalmantesESono.map(planta => (
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

			{/* DIGESTÃO E ESTÔMAGO */}
			<section>
				<h2 className={h2Class}>Digestão e Estômago</h2>
				<div className={divClass}>
					{plantasDigestaoEEstomago.map(planta => (
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

			{/* GRIPE E IMUNIDADE */}
			<section>
				<h2 className={h2Class}>Gripe e Imunidade</h2>
				<div className={divClass}>
					{plantasGripeEImunidade.map(planta => (
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

			{/* ANTI-INFLAMATÓRIOS */}
			<section>
				<h2 className={h2Class}>Anti-inflamatórios</h2>
				<div className={divClass}>
					{plantasAntiInflamatorias.map(planta => (
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
