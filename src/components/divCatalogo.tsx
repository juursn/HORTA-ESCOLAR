import { NavLink } from "react-router-dom"

export const DivCatalogo = ({
	txt,
	caminho,
	imagem,
}: {
	txt: string
	caminho: string
	imagem: string
}) => {
	return (
		<>
			<NavLink to={caminho}>
				<div
					className="bg-cover bg-center h-35 w-35 md:h-43 md:w-43 lg:h-49 lg:w-49 rounded-2xl flex justify-center items-end py-2 transition-transform duration-300 hover:scale-105"
					style={{
						backgroundImage: `url(${imagem})`,
					}}
				>
					<p className="bg-white w-9/12 rounded-2xl h-fit py-0.5">{txt}</p>
				</div>
			</NavLink>
		</>
	)
}
