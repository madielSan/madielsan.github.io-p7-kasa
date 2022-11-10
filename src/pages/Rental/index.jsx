import React from "react"
import { useParams} from "react-router-dom"
import Carrousel from "../../components/Carrousel"
import rentals from "../../datas/datas-logement.json"


function Rental() {
    const {id}= useParams()
    const rental = rentals.find((rental) => rental.id === id);

        
    const {title, pictures, description, host, rating, location, equipements} = rental
    
    return (
        <div>
            <Carrousel slider={pictures} />
        </div>
        
    )
}

export default Rental
