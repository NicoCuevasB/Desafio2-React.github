import { useState } from "react";
const Alert = (props) => {
    const [error, setError] = useState(false);
    const [exito, setExito] = useState(false);
    const handleButton2 = (props) => {
        let usuario = props.nombre;
        let correo = props.email;
        let contraseña = props.password;
        if (usuario == "" || correo == "" || contraseña == "") {
            setError(true);
            setExito(false);
        } else {
            setError(false);
            setExito(true);
        }
    };
    return (
        <div>
            <button onClick={() => handleButton2(props)}>Iniciar Sesión</button>
            {error ? <p>Todos los campos son obligatorios</p> : exito ? <p>Inicio exitoso</p> : null}
        </div>
    );
};

export default Alert;
