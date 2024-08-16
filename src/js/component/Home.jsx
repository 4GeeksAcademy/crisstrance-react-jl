import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Alert from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { Batman } from "./Batman.jsx";
import { Superman } from "./Superman.jsx";
import { Flash } from "./Flash.jsx";
import { Ww } from "./Ww.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Alert />
			{/* {<Spinner />} */}
			<h1>Justice League</h1>
			<div className="row m-2 d-flex justify-content-center">
				<Batman />
				<Superman />
				<Flash />
				<Ww />
			</div>

			<Jumbotron />
			<hr />
			<Footer />
		</div>
	);
};

export default Home;
