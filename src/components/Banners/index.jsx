import React from "react";
import "../../_scss/components/banner.scss"

function Banner ({image, text})  {
		return (
			<div className="banner">
                <img className={ text ? "banner__image" : "banner__image--about"} src={image} alt='Bannière de page'></img>
                <div className={text ? "banner__filter" : "banner__filter--about"}></div>
				{text ? <h2 className='banner__text'>{text}</h2>: null}
			</div>
		)
	}


export default Banner