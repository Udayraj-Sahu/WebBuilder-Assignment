import React from "react";
import "../Navbar/Navbar.scss";
import search from "../../assets/search.png";
function Navbar() {
	return (
		<>
			<header className="nav-container flex">
				<div className="search">
					<img src={search} alt="" />
				</div>
				<ul className="nav-menu flex">
					<li>
						<a href="/">Categories</a>
					</li>

					<li>
						<a href="/">Website Builders</a>
					</li>

					<li>
						<a href="/">Today's deals</a>
					</li>
				</ul>
			</header>
		</>
	);
}

export default Navbar;
