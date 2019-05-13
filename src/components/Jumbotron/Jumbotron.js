//reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1> Batman Memory Game!</h1>
		<h2>Click on any image to earn a point, but make sure you  don't click on the same image more than once or its game over. Click all 12 pics and become THE BATMAN!</h2>
	</header>
);
export default Jumbotron;
