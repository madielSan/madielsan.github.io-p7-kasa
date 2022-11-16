import Banner from "../../components/Banners"
import image from "../../assets/banner-about.jpg"
import aboutDatas from "../../datas/datas-about.json"
import Collapse from "../../components/Collapse"
import "../../_scss/pages/about.scss"
function About() {
    return (
        <main className="about">
            <div className="about__banner">
                <Banner image={image} />
            </div>
            <section className="collapse">
                {aboutDatas.map((aboutDatas) => {
                    return (
                        <Collapse key={aboutDatas.id} title={aboutDatas.title} description={aboutDatas.description} />
                    )

                })}
            </section>
        </main>
    )
}

export default About
