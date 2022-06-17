import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
	return (
		<div className={classes.card}>
			<h1 className={classes.text}>{props.children}</h1>
		</div>
	);
};
export default Card;
