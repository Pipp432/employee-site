import { React, useState } from "react";
import classes from "./InputPrompt.module.css";

const InputPrompt = (props) => {
	const [inputID, setInputID] = useState("");
	const [valid, setValid] = useState(false);
	const inputChangeHandler = (event) => {
		event.preventDefault();
		if (/^\d+$/.test(event.target.value)) {
			setInputID(event.target.value);
			setValid(true);
		} else {
			setValid(false);
		}
	};
	return (
		<div className={classes.wrapper}>
			<input
				type='text'
				className={classes.inputPrompt}
				placeholder='Input ID'
				onChange={inputChangeHandler}
			></input>
			<button
				className={classes.btn}
				disabled={!valid}
				onClick={(event) => props.submit(inputID)}
			>
				{" "}
				Search
			</button>
		</div>
	);
};
export default InputPrompt;
