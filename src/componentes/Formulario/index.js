import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspenca from "../ListaSuspenca"
import "./Formulario.css"
const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data-science',
        'Devops',
        'UX e Dsignin',
        'Mobile',
        'Inivação e Gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspenca label="Time" itens={times} />
            </form>
        </section>
    )

}

export default Formulario