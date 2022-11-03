import React from "react";
import "../../_scss/layouts/Banner.scss";


function Banner ({text})  {
		return (
			<div className='home-banner'>
                
				{text ? <h2 className='home-banner__text'>{text}</h2>: null}
			</div>
		)
	}


export default Banner