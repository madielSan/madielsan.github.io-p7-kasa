import React, { useState } from "react";
import { useRef } from "react";
import {CSSTransition} from "react-transition-group"
import chevron from "../../assets/chevron.jpg"
import "../../_scss/components/collapse.scss"

function Collapse({title, description}) {
    const nodeRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <article className="collapse">
            <div className="collapse__head">
                <div className="collapse__head__title">{title}</div>
                <span className={isOpen ? "collapse__head__arrow" : "collapse__head__arrow rotate"} onClick={() => setIsOpen(!isOpen)}>
                    <img className="chevron" src={chevron} alt="Chevron d'ouverture"/>
                </span>
            </div>
            {
            // isOpen &&
            <CSSTransition
            nodeRef={nodeRef}
            in={isOpen}
            timeout={200}
            classNames="fade"
            unmountOnExit
            appear
            
          >
             <div ref={nodeRef} className="collapse__description">{description}</div>
             </CSSTransition>
        }
        </article>
    )

}

export default Collapse