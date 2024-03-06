import React from "react";
import "../Product/Product.scss";
import img from "../../assets/download 1.png";
import img1 from "../../assets/down.png";
import Reviews from "../Reviews/Reviews";
import Button from "../Button/Button";
import Choices from "../Choices/Choices";

function Product({Choices , idx, rating}) {
	return (
		<>
		{Choices}
        {idx}
			<div className="product-container grids">
				
				<div className="product-img flex">
					<img src={img} alt="" />
					<span>Bulider</span>
				</div>
				<div className="product-desc">
					<div>WixPro 72-Inch Responsive Website Builder </div>-
					Comprehensive Digital Platform Creation Tool, Streamlined
					Design Interface for Professional Websites and Online Stores
					(Black/Blue)
					<span className="product-desc">
						<div>Main Highlight</div>
						[What You Get]: Receive the WixPro website builder
						suite, access to premium design templates, an extensive
						library of widgets and apps, and detailed step-by-step
						guides.
					</span>
					<div className="show-more">
						<span>Show More</span>
						<img src={img1} alt="" />
					</div>
				</div>
				<div className="product-reviews">
					<Reviews rating={rating} desc="Excellent" />
					<div className="product-details">
						<Button content="Views" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Product;
