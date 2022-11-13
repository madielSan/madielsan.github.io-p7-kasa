import "../../_scss/components/description.scss"
function Description({description}) {
    return (
        <div className="description">
                <p className="description__text">{description}</p>
        </div>
    )
}

export default Description