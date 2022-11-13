import "../../_scss/components/tags.scss"
function Tags({tags}) {
    return (
        <ul className="tags">
            {tags.map((keyTag) => (
                <li className="tags__tag" key={keyTag}>{keyTag}</li>
            ))}
        </ul>
    )
}

export default Tags