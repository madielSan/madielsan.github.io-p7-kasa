import React from "react"
import { useParams} from "react-router-dom"
import Carrousel from "../../components/Carrousel"
import rentals from "../../datas/datas-logement.json"
import Tags from "../../components/Tags"
import Rating from "../../components/Rating"
import Host from "../../components/Host"
import Collapse from "../../components/Collapse"
import Equipments from "../../components/Equipments"
import "../../_scss/pages/rental.scss"


function Rental() {
    const {id}= useParams()
    const rental = rentals.find((rental) => rental.id === id)

        
    const {title, pictures, description, host, rating, location, equipments, tags} = rental
    
    return (
        <div className="rental">
            <Carrousel classname="rental__carrousel" slider={pictures} />
            <div className="rental__presentation">
                <div className="rental__presentation__titles">
                    <h1 className="rental__presentation__titles__title">{title}</h1>
                    <p className="rental__presentation__titles__location">{location}</p>
                </div>
                <Host host={host} />
            </div>
            <div className="rental__features">
                <Tags tags={tags} />
                <Rating  rating={rating}/>
            </div>
            <div className="rental__description">
                <Collapse title="Description" description={description}/>
                <Collapse title="Équipements" description={Equipments({equipments})}/>

            </div>
        </div>
        
    )
}

export default Rental
