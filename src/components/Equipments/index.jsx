import "../../_scss/components/equipments.scss"
function Equipments({equipments}) {
    return (
        <ul className="equipments">
            {equipments.map((element, index) => (
                <li className="equipments__list" key={`${element}-${index}`}>{element}</li>
            ))}
        </ul>
    )
}

export default Equipments