import { Cards } from "../../components/Cards"
import { DivCatalogo } from "../../components/divCatalogo"
import { Voltar } from "../../components/Voltar"
import { dianaPNG } from "../../assets/icons/index"
import {
	plantasFolhasPegajosas,
	plantasArmadilhaEmJarro,
	plantasSuccaoAquatica,
} from "../../data/plantasCarnivoras"

const h2Class =
	"bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl"

const divClass =
	"text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]"

export const Carnivoras = () => {
	return (
		<main className="mt-12 flex-1">
			{/* BANNER */}
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

			{/* FOLHAS PEGAJOSAS */}
			<section>
				<h2 className={h2Class}>Plantas com Folhas Pegajosas</h2>
				<div className={divClass}>
					{plantasFolhasPegajosas.map(planta => (
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

			{/* ARMADILHA EM JARRO */}
			<section>
				<h2 className={h2Class}>Plantas de Armadilha em Jarro</h2>
				<div className={divClass}>
					{plantasArmadilhaEmJarro.map(planta => (
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

			{/* SUCÇÃO AQUÁTICA */}
			<section>
				<h2 className={h2Class}>Plantas de Sucção Aquática</h2>
				<div className={divClass}>
					{plantasSuccaoAquatica.map(planta => (
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
