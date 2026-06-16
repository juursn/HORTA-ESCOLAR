import { useState } from "react";
import { pesquisa, menu, close } from "../../assets/index";
import { Li } from "../../components/li";

export const Header = () => {
    const [menu2, setMenu] = useState(false)
    const alternarMenu = () => {
        setMenu(!menu2)
    }

    return (
        <>
            <header>
                <nav>
                    {/* barra de pesquisa */}
                    <div>
                        <img src={pesquisa} alt="Pesquisar" />
                    </div>
                    <div id="menu">
                        {/* menu hambuguer */}
                        <img
                            onClick={alternarMenu}
                            src={menu2 ? close : menu}
                            alt="Menu"
                        />
                        {/* Fim menu hamburguer */}
                    </div>
                </nav>

                {menu2 && (<div>
                    <ul>
                        <p>Recomendações</p>
                        <Li txt="Catálogo de plantas" caminho="" />
                        <Li txt="Diagnóstico de plantas" caminho="" />
                        <Li txt="Diagnóstico de pragas" caminho="" />
                        <Li txt="Gestão da horta" caminho="" />
                        <Li txt="Sobre o projeto" caminho="" />
                    </ul>
                </div>)}
            </header>


            <main>

            </main>


        </>
    )
}