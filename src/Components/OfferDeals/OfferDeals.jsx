import React from "react";
import "../OfferDeals/OfferDeals.scss";
function OfferDeals({ content }) {
	return (
		<>
			<div className="offer-cont">
				<span className="offer-content">{content}</span>
			</div>
		</>
	);
}

export default OfferDeals;
