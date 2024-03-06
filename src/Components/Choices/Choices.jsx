import React from "react";
import '../Choices/Choices.scss'
function Choices({ Choices, img }) {
	return (
		<>
			<div className="choices-container flexs">
				<div className="img">
					<img src={img} alt="" />
				</div>
				<div className="choices-text">{Choices}</div>
			</div>
		</>
	);
}

export default Choices;
