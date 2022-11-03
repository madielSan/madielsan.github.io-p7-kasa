import Banner from "../../components/Banners/home-banner"
import ThumbProduct from "../../components/ThumbProduct"
import Rentals from "../../datas/datas-logement.json"
import {Link} from "react-router-dom"
import "../../_scss/pages/_home.scss"

function Home() {
    return (
        <main>
            <Banner text="Chez vous, partout et ailleurs" />
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

