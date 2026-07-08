import { roboPNG } from "../../assets/icons"
import { Cards } from "../../components/Cards"
import { UploadPlanta } from "../../components/UploadPlanta"

export function DiagnosticoPlanta() {
	return (
		<>
			<main className="mt-12 flex-1">
				<h1 className="bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
					Diagnóstico Plantas
				</h1>

				<section className="flex items-center justify-center px-3 bg-[#F5F5F773]">
					<img src={roboPNG} alt="Robô" />
					<Cards
						textos={[
							"Bem-vindo à diagnóstico de plantas. Envie uma foto e eu ajudarei a descobrir qual espécie foi encontrada...",
							"Posso analisar características como folhas, flores, frutos e formato da planta para auxiliar na identificação...",
							"Após a análise, apresentarei possíveis espécies e informações úteis sobre cada uma delas...",
						]}
					/>
				</section>
				<UploadPlanta />
			</main>
		</>
	)
}
