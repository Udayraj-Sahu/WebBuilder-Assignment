import React from "react";
import DynamicRating from "../DynamicRating/DynamicRating";
import '../Reviews/Reviews.scss'
function Reviews({ rating, desc }) {
	return <>
        <div className="review-cont">
            <div className="rating">
                <h2>{rating}</h2>
            </div>
            <div className="rating-words">
               <span>{desc}</span>
            </div>
            <div className="rating-in-starts">
                <DynamicRating/>
            </div>
        </div>
    </>;
}

export default Reviews;
