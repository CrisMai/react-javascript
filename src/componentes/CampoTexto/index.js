
import './CampoTexto.css';

const CampoTexto = (props) => {


    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value);
    }
    
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholderte} />
            
        </div>
    )

}

export default CampoTexto;