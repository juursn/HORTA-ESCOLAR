import { dianaPNG } from "../../assets/index";
import { DivCatalogo } from "../../components/divCatalogo";

export const Home = () => {
    return (
        <>
            <main>
                {/* == BANNER PRINCIPAL == */}
                <h1>Horta Escolar Digital</h1>
                <section>
                    <img src={dianaPNG} alt="Diana" />
                    <div>
                        <p>
                            A Horta Escolar Digital é uma plataforma interativa criada para
                            aproximar tecnologia, educação e sustentabilidade.
                        </p>
                    </div>
                </section>

                {/* == CATÁLOGO DE PLANTAS == */}
                <section>
                    <h2>Catálogo de plantas</h2>
                    <div>
                        <DivCatalogo txt="Alimentícia" caminho="" />
                        <DivCatalogo txt="Medicinal" caminho="" />
                        <DivCatalogo txt="Ornamentar" caminho="" />
                        <DivCatalogo txt="Carnívora" caminho="" />
                    </div>
                </section>
            </main>
        </>
    );
}