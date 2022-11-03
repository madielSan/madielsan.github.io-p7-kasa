import React from "react";
import "../../_scss/components/_thumbProduct.scss"

function ThumbProduct({title, cover}) {
    return (
        <div className="thumb">
            <img className="thumb__cover" src={cover} alt="Logement à louer"></img>
            <div className="thumb__filter"></div>
            <h2 className="thumb__title">{title}</h2>
        </div>
    )

}

export default ThumbProduct