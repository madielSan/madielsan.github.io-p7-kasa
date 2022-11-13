function Tags({tags}) {
    return (
        <ul>
            {tags.map((keyTag) => (
                <li key={keyTag}>{keyTag}</li>
            ))}
        </ul>
    )
}

export default Tags