import './CampoTexto.css';

const CampoTexto = (props) => {
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholderte} />
            
        </div>
    )

}

export default CampoTexto;