import { NavLink } from "react-router-dom"

export const Voltar = ({ caminho }: { caminho: string }) => {
	return (
		<>
			<div className="w-full flex justify-center">
				<button className="font- text-white text-md bg-green-600 mt-8 px-6 py-2 rounded-2xl">
					<NavLink to={caminho}>Voltar</NavLink>
				</button>
			</div>
		</>
	)
}
