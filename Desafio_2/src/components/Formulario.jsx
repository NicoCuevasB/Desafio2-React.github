import { useState } from "react";
import Alert from "./Alert";
import "../App.css";

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validar, setValidar] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (nombre == "" || email == "" || password == "" || validar == "") {
            alert("Hay datos sin completar");
        } else if (!emailRegex.test(email)) {
            alert("Formato correo incorrecto");
        } else if (password != validar) {
            alert("Las contraseñas no concuerdan");
        } else {
            alert("Usuario creado correctamente");
        }
    };

    const handleText = (e) => {
        setNombre(e.target.value);
    };
    return (
        <div>
            <form className="formula" onSubmit={handleSubmit}>
                <div>
                    <input type="nombre" id="nombre" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => handleText(e)} />
                </div>
                <div>
                    <input type="text" id="email" name="email" placeholder="tuemail@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="validar"
                        name="validar"
                        placeholder="Confirmar tu Contraseña"
                        value={validar}
                        onChange={(e) => setValidar(e.target.value)}
                    />
                </div>
                <button type="submit">Registrarse</button>
            </form>
            <Alert nombre={nombre} email={email} password={password}></Alert>
        </div>
    );
};

export default Formulario;
