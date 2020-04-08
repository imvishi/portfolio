import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import "../Style/RatingStyle.css"

export default function RatingInStar(props) {
    const currentRating = props.rating
    const remainingRating = 5 - currentRating
    const validRating = []
    for (let i = 0; i < currentRating; i++) {
        validRating.push(<FontAwesomeIcon icon={faStar} style={{color: "yellow"}} className="Star"/>)
    }
    for (let i = 0; i < remainingRating; i++) {
        validRating.push(<FontAwesomeIcon icon={faStar} className="Star"/>)
    }
    return (
        <div>
            {validRating}
        </div>
    )
}