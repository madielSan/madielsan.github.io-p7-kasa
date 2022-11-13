function Host({host}) {
    return(
        <div>
            <div>{host.name}</div>
            <img  src={host.picture} alt={host.name}/>
        </div>
    )
}

export default Host