import './ListaSuspenca.css'

const ListaSuspenca = (props) => {
    return(
        <div className='lista-suspenca'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                {props.itens.map(item => <option key={item}>{item}</option>)}               
            </select>
        </div>
    )
}

export default ListaSuspenca