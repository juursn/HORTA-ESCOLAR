import { NavLink } from "react-router-dom"

export const Li = ({txt, caminho}: {txt: string; caminho: string}) => {
    return(
        <>
            <li>
                <NavLink to={caminho}>{txt}</NavLink>
            </li>
        </>
    );
}