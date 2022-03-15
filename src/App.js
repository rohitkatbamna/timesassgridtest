import "./scss/app.scss";
import personimg from "./assets/images/image-jeremy.png";
import Smallcard from "./small_card";
import jsondata from "./assets/data.json";
import { useState } from "react";
function App() {
	const [first, setfirst] = useState("weekly");

	return (
		<div className="app_all_of_it">
			<div className="App">
				<div className="add_bg_here">
					<div className="main_app_report_for">
						<div className="main_app_fun">
							<img
								src={personimg}
								height={50}
								width={50}
								alt="Person"
								className="app_person_image"
							/>
							<p>Report for</p>
							<h1>Homer Simpson</h1>
						</div>
					</div>
					<div className="main_stats">
						<h6
							className="change_on_hover"
							onClick={() => {
								setfirst("daily");
							}}>
							Daily
						</h6>
						<h6
							className="change_on_hover"
							onClick={() => {
								setfirst("weekly");
							}}>
							Weekly
						</h6>
						<h6
							className="change_on_hover"
							onClick={() => {
								setfirst("monthly");
							}}>
							Monthly
						</h6>
					</div>
				</div>
				<div className="small_cards_here">
					{jsondata.map((simobj) => {
						return <Smallcard first={first} simobj={simobj} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
