import Banner from "../../components/Banners"
import ThumbProduct from "../../components/ThumbProduct"
import Rentals from "../../datas/datas-logement.json"
import image from "../../assets/banner-home.jpg"
import {Link} from "react-router-dom"
import "../../_scss/pages/home.scss"

function Home() {
    return (
        <main className="home">
            <div className="home-banner">
            <Banner image={image} text="Chez vous, partout et ailleurs" />
            </div>
            <section className="thumbs-container">
                {Rentals.map((rental) => {
                    return(
                        <article className="thumbs-container__thumb" key={rental.id}>
                            <Link className="thumbs-link" to={`/rental/${rental.id}`}>
                                <ThumbProduct cover={rental.cover} title={rental.title} />
                            </Link>
                        </article>
                        )
                    })  
                }
            </section>
        </main>
    )
}

export default Home

