import React from "react";
import "../App.css";
import SocialButton from "./SocialButton.jsx";

const Registro = () => {
    return (
        <div>
            <h1 className="header">Crea una cuenta</h1>
            <SocialButton facebook="fa-brands fa-facebook" twitter="fa-brands fa-twitter"></SocialButton>
            <h3 className="h3-style">o usa tu email para registrarte</h3>
        </div>
    );
};

export default Registro;
