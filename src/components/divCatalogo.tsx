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
					className="bg-cover bg-center h-40 w-40 rounded-md flex justify-center items-end py-2"
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
