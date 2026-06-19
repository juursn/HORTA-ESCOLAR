import { NavLink } from "react-router-dom"

export const Li = ({ txt, caminho }: { txt: string; caminho: string }) => {
	return (
		<>
			<li className="font-medium text-2xl ">
				<NavLink to={caminho}>{txt}</NavLink>
			</li>
		</>
	)
}
