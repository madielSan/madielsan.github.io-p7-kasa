import React from "react";
import "../../_scss/components/banner.scss"

function Banner ({image, text})  {
		return (
			<div className='banner'>
                <img className='banner__image' src={image} alt='Bannière de page'></img>
                <div className="banner__filter"></div>
				{text ? <h2 className='banner__text'>{text}</h2>: null}
			</div>
		)
	}


export default Banner