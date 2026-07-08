import { Cards } from "../../components/Cards"
import { DivCatalogo } from "../../components/divCatalogo"
import { Voltar } from "../../components/Voltar"
import { dianaPNG } from "../../assets/icons/index"
import {
  plantasFloresOrnamentais,
  plantasFolhagensOrnamentais,
  plantasCactosESuculentas,
  plantasArvoresEArbustos,
} from "../../data/plantasOrnamentais"

const h2Class =
  "bg-linear-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl"

const divClass =
  "text-center flex flex-wrap gap-3 items-center justify-center bg-[#F5F5F773]"

export const Ornamentais = () => {
  return (
    <main className="mt-12 flex-1">

      {/* BANNER */}
      <h1 className="bg-linear-to-r from-green-400 to-green-700 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
        Plantas Ornamentais
      </h1>

      <section className="flex items-center justify-center px-3 bg-[#F5F5F773]">
        <img src={dianaPNG} alt="Diana" />
        <Cards
          textos={[
            "Bem-vindo ao catálogo de plantas ornamentais! Temos espécies que encantam pela beleza, tornando seu ambiente mais agradável. Temos...",
            "…opções de Flores Ornamentais, perfeitas para colorir jardins e ambientes com rosas, orquídeas, hibiscos, etc...",
            "Temos também Folhagens Ornamentais. Elas se destacam pelas formas e cores das folhas, como jiboias, samambaias, etc...",
            "Contamos ainda com Cactos e Suculentas. São plantas resistentes e fáceis de cuidar, como jade, babosa, echeverias, etc...",
            "Há também Árvores e Arbustos Ornamentais. Eles valorizam jardins e áreas externas com espécies como ipês, primaveras, etc...",
          ]}
        />
      </section>

      {/* FLORES ORNAMENTAIS */}
      <section>
        <h2 className={h2Class}>Flores Ornamentais</h2>
        <div className={divClass}>
          {plantasFloresOrnamentais.map((planta) => (
            <DivCatalogo
              key={planta.txt}
              txt={planta.txt}
              imagem={planta.imagem}
              caminho={planta.caminho}
            />
          ))}
        </div>
      </section>

      {/* FOLHAGENS ORNAMENTAIS */}
      <section>
        <h2 className={h2Class}>Folhagens Ornamentais</h2>
        <div className={divClass}>
          {plantasFolhagensOrnamentais.map((planta) => (
            <DivCatalogo
              key={planta.txt}
              txt={planta.txt}
              imagem={planta.imagem}
              caminho={planta.caminho}
            />
          ))}
        </div>
      </section>

      {/* CACTOS E SUCULENTAS */}
      <section>
        <h2 className={h2Class}>Cactos e Suculentas</h2>
        <div className={divClass}>
          {plantasCactosESuculentas.map((planta) => (
            <DivCatalogo
              key={planta.txt}
              txt={planta.txt}
              imagem={planta.imagem}
              caminho={planta.caminho}
            />
          ))}
        </div>
      </section>

      {/* ÁRVORES E ARBUSTOS */}
      <section>
        <h2 className={h2Class}>Árvores e Arbustos Ornamentais</h2>
        <div className={divClass}>
          {plantasArvoresEArbustos.map((planta) => (
            <DivCatalogo
              key={planta.txt}
              txt={planta.txt}
              imagem={planta.imagem}
              caminho={planta.caminho}
            />
          ))}
        </div>
      </section>

      <Voltar caminho="/HORTA-ESCOLAR/" />
    </main>
  )
}