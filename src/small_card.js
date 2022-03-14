import React from "react";
import epll from "./assets/images/icon-ellipsis.svg";
function Smallcard({ first, simobj }) {
	const strone = simobj.timeframes;
	let anewstr;
	if (first === "weekly") {
		anewstr = "week";
	} else if (first === "monthly") {
		anewstr = "month";
	} else if (first === "daily") {
		anewstr = "day";
	}
	return (
		<div className="small_card_work">
			<div className="work_image">
				<img src={simobj.img} alt="simobj.title" />
			</div>
			<div className="small_card_work_subspace">
				<div className="work_and_ellip">
					<h5>{simobj.title}</h5>
					<img src={epll} alt="ellip" height={5} width={20} />
				</div>
				<h2>{strone[first].current} HRS</h2>
				<h4>
					Last {anewstr} {strone[first].previous} hrs
				</h4>
			</div>
		</div>
	);
}

export default Smallcard;
