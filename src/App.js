import InputPrompt from "./Components/InputPrompt";
import classes from "./App.module.css";
import employeeObj from "./data/employee.json";
import Card from "./UI/Card";
import { useState } from "react";

function App() {
	const [name, setName] = useState("Please Enter ID");
	const submit = (inputID) => {
		const result = employeeObj.filter((entry) => entry.employee_id === inputID);
		setName(result[0].employee_name_thai);
	};
	return (
		<>
			<b className={classes.text}> Search for SP by ID</b>
			<img
				src='https://static.wixstatic.com/media/69fbc5_b202203f01664c4186fee876ffeabb19.jpg/v1/fill/w_978,h_554,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/69fbc5_b202203f01664c4186fee876ffeabb19.jpg'
				alt='cba'
			/>
			<InputPrompt submit={submit}></InputPrompt>

			<b className={classes.credit}>Made by IS005</b>
			<Card>{name}</Card>
		</>
	);
}

export default App;
