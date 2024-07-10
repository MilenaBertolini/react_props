import CaixaInfo from "./componentes/CaixaInfo"
import TituloSubtitulo from "./componentes/TituloSubtitulo"

function App() {
  
  const textosCaixas = ["Plano de desenvolvimento institucional", "Pesquisa publica processos iftm", "Licitações e contratos", "Receitas e despesas", "dados abertos", "Transparência e prestação de contas", "servidores", "Perguntas frequentes"];

  return (

    <>
      <TituloSubtitulo/>
      <div className="containerFora">
          {
            textosCaixas.map((textoCaixa, index) => {
              return <CaixaInfo key={index} texto={textoCaixa} />
            }
            )
          }
      </div>
    </>
  )
}

export default App
