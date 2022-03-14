import "./scss/app.scss";
import personimg from "./assets/images/image-jeremy.png";
import workimg from "./assets/images/icon-work.svg";
import epll from "./assets/images/icon-ellipsis.svg";

function App() {
	return (
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
					<h6>Daily</h6>
					<h6>Weekly</h6>
					<h6>Monthly</h6>
				</div>
			</div>
			<div className="small_cards_here">
				<div className="small_card_work">
					<div className="work_image">
						<img src={workimg} alt="work" />
					</div>
					<div className="small_card_work_subspace">
						<div
							style={{
								display: "flex",
								alignContent: "center",
								alignItems: "center",
								justifyContent: "space-between",

								color: "white",
							}}>
							<h5>Work</h5>
							<img src={epll} alt="ellip" height={5} width={20} />
						</div>
						<h2>36 hrs</h2>
						<h4>Last week 36 hrs</h4>
					</div>
				</div>
				<div className="small_card_work">
					<div className="work_image">
						<img src={workimg} alt="work" />
					</div>
					<div className="small_card_work_subspace">
						<div
							style={{
								display: "flex",
								alignContent: "center",
								alignItems: "center",
								justifyContent: "space-between",

								color: "white",
							}}>
							<h5>Work</h5>
							<img src={epll} alt="ellip" height={5} width={20} />
						</div>
						<h2>36 hrs</h2>
						<h4>Last week 36 hrs</h4>
					</div>
				</div>
				<div className="small_card_work">
					<div className="work_image">
						<img src={workimg} alt="work" />
					</div>
					<div className="small_card_work_subspace">
						<div
							style={{
								display: "flex",
								alignContent: "center",
								alignItems: "center",
								justifyContent: "space-between",

								color: "white",
							}}>
							<h5>Work</h5>
							<img src={epll} alt="ellip" height={5} width={20} />
						</div>
						<h2>36 hrs</h2>
						<h4>Last week 36 hrs</h4>
					</div>
				</div>
				<div className="small_card_work">
					<div className="work_image">
						<img src={workimg} alt="work" />
					</div>
					<div className="small_card_work_subspace">
						<div
							style={{
								display: "flex",
								alignContent: "center",
								alignItems: "center",
								justifyContent: "space-between",

								color: "white",
							}}>
							<h5>Work</h5>
							<img src={epll} alt="ellip" height={5} width={20} />
						</div>
						<h2>36 hrs</h2>
						<h4>Last week 36 hrs</h4>
					</div>
				</div>
				<div className="small_card_work">
					<div className="work_image">
						<img src={workimg} alt="work" />
					</div>
					<div className="small_card_work_subspace">
						<div
							style={{
								display: "flex",
								alignContent: "center",
								alignItems: "center",
								justifyContent: "space-between",

								color: "white",
							}}>
							<h5>Work</h5>
							<img src={epll} alt="ellip" height={5} width={20} />
						</div>
						<h2>36 hrs</h2>
						<h4>Last week 36 hrs</h4>
					</div>
				</div>
				<div className="small_card_work">
					<div className="work_image">
						<img src={workimg} alt="work" />
					</div>
					<div className="small_card_work_subspace">
						<div
							style={{
								display: "flex",
								alignContent: "center",
								alignItems: "center",
								justifyContent: "space-between",

								color: "white",
							}}>
							<h5>Work</h5>
							<img src={epll} alt="ellip" height={5} width={20} />
						</div>
						<h2>36 hrs</h2>
						<h4>Last week 36 hrs</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
