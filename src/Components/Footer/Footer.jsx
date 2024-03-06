import React from "react";
import "../Footer/Footer.scss";
function Footer() {
	return (
		<>
			<div className="footer-container ">
				<div className="footer-section grid">
					<div className="categories-section">
						<h2>CATEGORIES</h2>
						<ul className="categories-menu">
							<li>Web Bulider</li>
							<li>Hosting</li>
							<li>Data Center</li>
							<li>Robotic-Automation</li>
						</ul>
					</div>
					<div className="contact-section">
						<h2>CONTACT</h2>
						<ul className="contact-menu">
							<li>Contact</li>
							<li>Privacy Policy</li>
							<li>Term of Service</li>
							<li>Categories</li>
							<li>About</li>
						</ul>
					</div>

					<div className="country-section">
						<select className="country-menu">
							<option value="state1">United State</option>
							<option value="state2">State 2</option>
							<option value="state3">State 3</option>
						</select>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
