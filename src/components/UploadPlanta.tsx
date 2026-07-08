import { useRef, useState } from "react"
import { saveICON } from "../assets/icons"

export function UploadPlanta() {
	const inputRef = useRef<HTMLInputElement>(null)
	const [preview, setPreview] = useState<string | null>(null)

	const handleArquivo = (e: React.ChangeEvent<HTMLInputElement>) => {
		const arquivo = e.target.files?.[0]
		if (arquivo) {
			setPreview(URL.createObjectURL(arquivo))
		}
	}

	return (
		<>
			<div className="w-full flex items-center justify-center">
				<div className="bg-[#DADADA] p-4 mx-3 rounded-xl mt-8 max-w-120">
					<h3 className="text-2xl font-extrabold pb-2">
						Envie uma foto da planta
					</h3>
					<p className="text-sm mb-5">
						Escolha ou tire uma foto da planta. Quanto mais nítida a imagem,
						melhor será a análise!
					</p>
					<div className="border-2 border-dashed border-gray-400 p-6 min-h-50 rounded-2xl flex flex-col items-center justify-center gap-4">
						{/* Preview ou ícone */}
						{preview ? (
							<img
								src={preview}
								alt="Preview da planta"
								className="w-full max-h-58 object-contain rounded-xl"
							/>
						) : (
							<div className="bg-[#9024CFF2] p-3 rounded-xl">
								<img src={saveICON} alt="Upload" className="w-8 h-8" />
							</div>
						)}
						{/* Botão muda o texto se já tiver imagem */}
						<button
							onClick={() => inputRef.current?.click()}
							className="bg-[#9024CFF2] hover:bg-purple-600 text-[#E3C2FF] font-semibold px-8 py-3 rounded-xl transition-colors duration-200 cursor-pointer"
						>
							{preview ? "Trocar Imagem" : "Selecionar Arquivo"}
						</button>
						<input
							ref={inputRef}
							type="file"
							accept="image/*"
							className="hidden"
							onChange={handleArquivo}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
