function Equipments({equipments}) {
    return (
        <ul>
            {equipments.map((element, index) => (
                <li key={`${element}-${index}`}>{element}</li>
            ))}
        </ul>
    )
}

export default Equipments