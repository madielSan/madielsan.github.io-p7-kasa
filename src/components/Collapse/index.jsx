import React, { useState } from "react";
import chevron from "../../assets/chevron.jpg"
import "../../_scss/components/collapse.scss"

function Collapse({title, description}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <article className="collapse">
            <div className="collapse__head">
                <div className="collapse__head__title">{title}</div>
                <span className={isOpen ? "collapse__head__arrow" : "collapse__head__arrow rotate"} onClick={() =>  setIsOpen(!isOpen)}>
                    <img className="chevron" src={chevron} alt="Chevron d'ouverture"/>
                </span>
            </div>
            {
            
            isOpen &&
             <div className="collapse__description">{description}</div>
        }
        </article>
    )

}

export default Collapse