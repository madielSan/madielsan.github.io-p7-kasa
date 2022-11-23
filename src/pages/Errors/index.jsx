import React from "react";
import { Link } from "react-router-dom";
import "../../_scss/pages/error.scss"

function Errors() {
    return (
        <main className="error">
            <div className="error__layout">
                <h2 className="error__layout__404">404</h2>
                <p className="error__layout__text">Oups ! La page que vous demandez n'existe pas.</p>
            </div>
            <Link className="error__link" to="/"> Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Errors
