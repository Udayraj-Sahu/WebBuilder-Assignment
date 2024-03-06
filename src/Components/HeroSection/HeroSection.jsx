import React from "react";
import "../HeroSection/HeroSection.scss";
import img1 from "../../assets/IMAGE.png";
import img2 from "../../assets/img2.png";
import img4 from "../../assets/Vector.png";
import img3 from "../../assets/img3.png";
import PagesHeading from "../PagesHeading/PagesHeading";
function HeroSection() {
	return (
		<>
			<div className="container hero-container">
				<div className="container-title">
					<h1 className="heading">Best Website builders in the US</h1>
				</div>
				<hr />
				<div className="subheading flex">
					<div className="subheading-content flex">
						<img src={img1} alt="" />
						<span>Last Update - Febeuary 22,2020</span>
					</div>
					<div className="subheading-content flex">
						<img src={img2} alt="" />
						<span>Advertising Disclosure</span>
					</div>
					<div className="subheading-content flex">
						<span>Top Relevant</span>
						<img src={img3} alt="" />
					</div>
				</div>

				<hr />
				<div className="pages-title">
					<PagesHeading title="Tools" />
					<PagesHeading title="AWS Bulider" />
					<PagesHeading title="Start Bulid" />
					<PagesHeading title="Bulid Supplies" />
					<PagesHeading title="Tooling" />
					<PagesHeading title="BlueHosting" />
				</div>

				<div className="page-navigation">
					<span>Home</span>
					<img src={img4} alt="" />
					<span>Hosting for all</span>
					<img src={img4} alt="" />
					<span>Hosting</span>
					<img src={img4} alt="" />
					<span>Hosting6</span>
					<img src={img4} alt="" />
					<span>Hosting5</span>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
