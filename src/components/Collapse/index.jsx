import React, { useState } from "react";
import chevron from "../../assets/chevron.jpg"
import "../../_scss/components/collapse.scss"

function Collapse({title, description, text, equipment}) {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <article className="collapse">
            <div className="collapse__head">
                <div className="collapse__head__title">{title}</div>
                <span className={isOpen ? "collapse__head__arrow" : "collapse__head__arrow rotate"} onClick={() =>  setIsOpen(!isOpen)}>
                    <img className="chevron" src={chevron} alt="Chevron d'ouverture"/>
                </span>
            </div>
            {
            
            text ?
            isOpen &&
            <p className="collapse__text">{text}</p>
             : equipment ?
            isOpen &&
                    <ul className="collapse__equipments">
                    {equipment.map((element, index) => (
                        <li className="collapse__equipments__list" key={`${element}-${index}`}>{element}</li>
                    ))}
                </ul> :
                isOpen &&
             <div className="collapse__description">{description}</div>
        }
        </article>
    )

}

export default Collapse