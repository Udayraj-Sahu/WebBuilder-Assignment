import React from "react";
import "../RelatedDeals/RelatedDeals.scss";

import Deals from "../Deals/Deals";
function RelatedDeals() {
	return (
		<>
			<div className="container ">
				<div className="deals-heading">
					<h1>Related deals you might like for</h1>
				</div>
				<div className="deals-container">
				<Deals />
				<Deals />
				<Deals />
				</div>
			</div>
		</>
	);
}

export default RelatedDeals;
