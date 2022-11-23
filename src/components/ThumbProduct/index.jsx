import React from "react";
import "../../_scss/components/thumbProduct.scss"

function ThumbProduct({title, cover}) {
    return (
        <div className={"thumb"}>
            <img className="thumb__cover" src={cover} alt="Logement à louer"></img>
            <h2 className="thumb__title">{title}</h2>
        </div>
    )

}

export default ThumbProduct