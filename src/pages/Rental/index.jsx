import React from "react"
import {useParams, Navigate} from "react-router-dom"
import Carrousel from "../../components/Carrousel"
import rentals from "../../datas/datas-logement.json"
import Tags from "../../components/Tags"
import Rating from "../../components/Rating"
import Host from "../../components/Host"
import Collapse from "../../components/Collapse"
import "../../_scss/pages/rental.scss"


function Rental() {
    const {id}= useParams() //récupération de l'ID produit de l'url
    const rental = rentals.find((rental) => rental.id === id)

    if (!rental) { // si l'élément id de l'url est différent d'un élément de la base de données du fichier JSON.
        return <Navigate to="/404"/>
     }

     //constante destructurée affectée à l'objet rental contenant les données.
    const {title, pictures, description, host, rating, location, equipments, tags} = rental 
    return (
        <div className="rental">
            <Carrousel classname="rental__carrousel" slider={pictures} />
            <div className="rental__presentation">
                <div className="rental__presentation__titles">
                    <h1 className="rental__presentation__titles__title">{title}</h1>
                    <p className="rental__presentation__titles__location">{location}</p>
                </div>
            </div>
            <div className="rental__tags">
            <Tags tags={tags} />
            </div>
            <div className="rental__features">
                <div className="rental__features__host">
                    <Host host={host} />
                </div>
                <div className="rental__features__rating">
                    <Rating  rating={rating}/>
                </div>
            </div>
            <div className="rental__description">
                <Collapse title="Description" text={description}/>
                <Collapse title="Équipements" equipment= {equipments}/>
            </div>
        </div> 
    )
}

export default Rental
