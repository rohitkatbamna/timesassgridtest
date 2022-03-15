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
		<div className="small_card_work" style={{ backgroundColor: simobj.color }}>
			<div className="work_image" style={{ zIndex: "1" }}>
				<img src={simobj.img} alt="simobj.title" height={55} width={55} />
			</div>
			<div className="small_card_work_subspace">
				<div
					className="work_and_ellip"
					style={{ marginRight: "30px", marginLeft: "30px" }}>
					<p style={{ fontSize: "15px", fontWeight: "bold" }}>{simobj.title}</p>
					<img src={epll} alt="ellip" height={5} width={20} />
				</div>
				<p style={{ fontSize: "40px", marginLeft: "25px", marginTop: "20px" }}>
					{strone[first].current}hrs
				</p>
				<p
					style={{
						fontSize: "14px",
						marginTop: "-35px",
						marginLeft: "20px",
						color: "#8b8dbd",
						paddingBottom: "10px",
					}}>
					Last {anewstr} - {strone[first].previous} hrs
				</p>
			</div>
		</div>
	);
}

export default Smallcard;
