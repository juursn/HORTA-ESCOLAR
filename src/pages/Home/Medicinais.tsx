import { Cards } from "../../components/Cards"
import { DivCatalogo } from "../../components/divCatalogo"
import { dianaPNG } from "../../assets/icons/index"
import {
	alho,
	arnicaBrasileira,
	beldroega,
	boldo,
	camomila,
	capimLimao,
	capuchinha,
	curcuma,
	equinacea,
	ervaBaleeira,
	ervaDoce,
	espinheiraSanta,
	garraDoDiabo,
	gengibre,
	guaco,
	hortela,
	maracuja,
	melissa,
	mulungu,
	roma,
	sabugueiro,
	sucupira,
	unhaDeGato,
	valeriana,
} from "../../assets/catalogo-medicinais/index"
import { Voltar } from "../../components/Voltar"
export const Medicinais = () => {
	return (
		<>
			<main className="mt-12 flex-1">
				{/* == BANNER PRINCIPAL == */}
				<h1 className="bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
					Plantas Medicinais
				</h1>
				<section className="flex items-center justify-center px-3 bg-[#F5F5F773]">
					<img src={dianaPNG} alt="Diana" />
					<Cards
						textos={[
							"Bem vindo ao catalogo de plantas medicinais! Aqui estão todas as plantas que podem trazer benefícios a saúde humana, temos...",

							"...opções para Calmantes e Sono, ideais para relaxar a mente e combater a insônia com maracujá, camomila, etc...",

							"Temos soluções focadas em Digestão e Estômago. Elas são excelentes para aliviar o mal-estar, azia,  os gases incômodos, etc...",

							"Também contamos com opções para Gripe e Imunidade. Elas ajudam a fortalecer as defesas do organismo e aliviar sintomas comuns, etc...",

							"Há ainda plantas com ação Anti-inflamatória. Elas auxiliam na redução de inflamações e desconfortos do dia a dia, etc...",
						]}
					/>
				</section>
				{/* == CATÁLOGO: Calmantes e Sono == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold">
						Calmantes e Sono
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773] p-4 rounded-xl">
						<DivCatalogo txt="Valeriana" caminho="" imagem={valeriana} />
						<DivCatalogo txt="Melissa" caminho="" imagem={melissa} />
						<DivCatalogo txt="Mulungu" caminho="" imagem={mulungu} />
						<DivCatalogo txt="Maracujá" caminho="" imagem={maracuja} />
						<DivCatalogo txt="Camomila" caminho="" imagem={camomila} />
						<DivCatalogo txt="Capim limão" caminho="" imagem={capimLimao} />
					</div>
				</section>

				{/* == CATÁLOGO: Digestão e Estômago == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold">
						Digestão e Estômago
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773] p-4 rounded-xl">
						<DivCatalogo txt="Boldo" caminho="" imagem={boldo} />
						<DivCatalogo txt="Hortelã" caminho="" imagem={hortela} />
						<DivCatalogo txt="Erva-doce" caminho="" imagem={ervaDoce} />
						<DivCatalogo txt="Beldroega" caminho="" imagem={beldroega} />
						<DivCatalogo
							txt="Espinheira-santa"
							caminho=""
							imagem={espinheiraSanta}
						/>
						<DivCatalogo txt="Capuchinha" caminho="" imagem={capuchinha} />
					</div>
				</section>

				{/* == CATÁLOGO: Gripe e Imunidade == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold">
						Gripe e Imunidade
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773] p-4 rounded-xl">
						<DivCatalogo txt="Guaco" caminho="" imagem={guaco} />
						<DivCatalogo txt="Alho" caminho="" imagem={alho} />
						<DivCatalogo txt="Gengibre" caminho="" imagem={gengibre} />
						<DivCatalogo txt="Equinácea" caminho="" imagem={equinacea} />
						<DivCatalogo txt="Sabugueiro" caminho="" imagem={sabugueiro} />
						<DivCatalogo txt="Romã" caminho="" imagem={roma} />
					</div>
				</section>

				{/* == CATÁLOGO: Anti-inflamatórios == */}
				<section>
					<h2 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold">
						Anti-inflamatórios
					</h2>
					<div className="text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773] p-4 rounded-xl">
						<DivCatalogo txt="Cúrcuma" caminho="" imagem={curcuma} />
						<DivCatalogo txt="Sucupira" caminho="" imagem={sucupira} />
						<DivCatalogo txt="Unha-de-gato" caminho="" imagem={unhaDeGato} />
						<DivCatalogo
							txt="Arnica brasileira"
							caminho=""
							imagem={arnicaBrasileira}
						/>
						<DivCatalogo
							txt="Garra-do-diabo"
							caminho=""
							imagem={garraDoDiabo}
						/>
						<DivCatalogo txt="Erva baleeira" caminho="" imagem={ervaBaleeira} />
					</div>
				</section>
				<Voltar caminho="/HORTA-ESCOLAR/" />
			</main>
		</>
	)
}
