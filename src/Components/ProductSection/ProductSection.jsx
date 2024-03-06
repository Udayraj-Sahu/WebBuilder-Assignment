import React from "react";
import Product from "../Product/Product";
import "../ProductSection/ProductSection.scss";
import Choices from "../Choices/Choices";
import img from "../../assets/img4.png";
import img1 from "../../assets/img5.png";
import Indexing from "../Indexing/Indexing";
function ProductSection() {
	return (
		<>
			<div className="container product-section">
				<Product
					Choices={<Choices img={img} Choices="Best Value" />}
					idx={<Indexing idx="1" />}
					rating="9.8"
				/>
				<Product
					Choices={<Choices img={img1} Choices="Best Offer" />}
					idx={<Indexing idx="2" />}
					rating="9.5"
				/>
				<Product idx={<Indexing idx="3" />} rating="9.4" />
				<Product idx={<Indexing idx="4" />} rating="9.2" />
				<Product idx={<Indexing idx="5" />} rating="9.7" />
				<Product idx={<Indexing idx="6" />} rating="9.1" />
			</div>
		</>
	);
}

export default ProductSection;
