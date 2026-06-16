import { NavLink } from "react-router-dom"

export const DivCatalogo = ({txt, caminho}: {txt: string; caminho: string}) => {
    return(
        <>
            <NavLink to={caminho}>
                <p>{txt}</p>
            </NavLink>
        </>
    )
}