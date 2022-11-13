import React from "react";
import emptyStar from "../../assets/empty-star.svg"
import fullStar from "../../assets/full-star.svg"

function Rating({rating}) {
    const score = [1, 2, 3, 4, 5]
    return (
        <div>
            {score.map((scoring) => (
              rating >= scoring ? (
                <img key={scoring} src={fullStar}  alt="étoile"/>
              )  : (
                <img key={scoring} src={emptyStar} alt="étoile vide"/>
              )
            ))}
        </div>
    )

}
export default Rating