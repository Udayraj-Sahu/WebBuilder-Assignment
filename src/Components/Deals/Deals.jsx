import React from "react";
import "../Deals/Deals.scss";
import img from "../../assets/download 1.png";
import OfferDeals from "../OfferDeals/OfferDeals";
import Button from "../Button/Button";
function Deals() {
	return (
		<>
			<div className="deals-cont">
				<div className="relatedDeal-img">
					<img src={img} alt="" />
				</div>
				<div className="offer-deals flexx">
					<OfferDeals content="20% off" />
					<OfferDeals content="Limited Offer" />
				</div>
				<div className="deals-title">
					<div>Webbuilder 1</div>
				</div>
				<div className="deals-desc">
					<span>Computer Modern clasic with wix support</span>
				</div>
				<div className="deals-price">
					<span className="discount-price">&#36;39.96 </span>
					<span className="original-price">&#36;49.96</span>
					<span className="discount-offer"> (20% off) </span>
				</div>
				<div className="viewmore-btn">
					<Button content="View Deals" />
				</div>
			</div>
		</>
	);
}

export default Deals;
