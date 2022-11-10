import React from "react";
import {useState} from "react";
import "../../_scss/components/carrousel.scss"
import chevron from "../../assets/chevron.jpg"


function Carrousel({slider}) {

    const [sliding, setSliding] = useState(0)
    const slideLength = slider.length 

    const Previous = () => {
        setSliding(sliding === 0 ? slideLength - 1 : sliding - 1)
        
    }

    const Next = () => {
        setSliding(sliding ===  slideLength - 1 ? 0 : sliding + 1)

    }

    return(
        <div className="carrousel">
            {slideLength > 1 ?(
            <>
                <img className="carrousel__previousSlide" src={chevron} alt="Précédent" onClick={Previous}/>
                <img className="carrousel__nextSlide" src={chevron} alt="Suivant" onClick={Next}/>
                <p className="carrousel__point"> {(sliding + 1 ) + '/' + slider.length}</p>
             </>
            ) : null}

            {slider.map((image, index) => {
                return(
                    
                    <div className="carrousel__content" key={index}>
                        { index === sliding &&
                            <img className="carrousel__content__image" src={image} alt="Location"/>
                        }
                    </div>
                )
            })}
            
        </div>
    )
}

export default Carrousel