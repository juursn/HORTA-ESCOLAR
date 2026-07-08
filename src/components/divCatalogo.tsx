import { useState } from "react"
import { NavLink } from "react-router-dom"

export const DivCatalogo = ({
	txt,
	caminho,
	imagem,
	nomeCientifico,
	origem,
	ondeEncontra,
}: {
	txt: string
	caminho: string
	imagem: string
	nomeCientifico?: string
	origem?: string
	ondeEncontra?: string
}) => {
	const [aberto, setAberto] = useState(false)
	const temDescricao = nomeCientifico || origem || ondeEncontra

	const handleClick = (e: React.MouseEvent) => {
		if (temDescricao) {
			e.preventDefault()
			setAberto(prev => !prev)
		}
	}

	return (
		<NavLink to={caminho} onClick={handleClick}>
			<div
				className={`
          bg-white rounded-2xl overflow-hidden shadow-sm
          transition-all duration-500 ease-in-out
          ${
						aberto
							? "flex flex-row w-72 md:w-96"
							: "flex flex-col w-35 md:w-43 lg:w-49 hover:scale-105"
					}
        `}
			>
				{/* Imagem */}
				<div
					className={`
            bg-cover bg-center shrink-0
            transition-all duration-500 ease-in-out
            ${
							aberto
								? "w-28 h-28 md:w-36 md:h-36 rounded-xl m-2"
								: "w-full h-35 md:h-43 lg:h-49 flex items-end justify-center py-2"
						}
          `}
					style={{ backgroundImage: `url(${imagem})` }}
				>
					{/* Label só aparece no card fechado */}
					{!aberto && (
						<p className="bg-white w-9/12 rounded-2xl h-fit py-0.5">{txt}</p>
					)}
				</div>

				{/* Descrição — layout horizontal quando aberto */}
				{aberto && (
					<div className="flex flex-col justify-center px-3 py-2 text-left gap-1 animate-fade-in">
						<p className="font-semibold text-base text-gray-900 mb-1">{txt}</p>
						{nomeCientifico && (
							<p className="text-xs text-gray-600">
								<span className="font-semibold text-gray-800">
									Nome Científico:
								</span>{" "}
								{nomeCientifico}
							</p>
						)}
						{origem && (
							<p className="text-xs text-gray-600">
								<span className="font-semibold text-gray-800">Origem:</span>{" "}
								{origem}
							</p>
						)}
						{ondeEncontra && (
							<p className="text-xs text-gray-600">
								<span className="font-semibold text-gray-800">
									Onde se Encontra:
								</span>{" "}
								{ondeEncontra}
							</p>
						)}
					</div>
				)}
			</div>
		</NavLink>
	)
}
