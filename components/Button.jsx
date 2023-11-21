import { useState } from "react";

const Button = () => {

	let [count, setCount] = useState(0)

	let inc =()=>{
		setCount(count+1);
	}
	let dec =()=>{
		if(count>0)
		setCount(count-1);
	}
	return ( 
		<div>
			<h1>{count}</h1>
			<button onClick={inc}>+</button>
			<button onClick={dec}>-</button>

		</div>
	 );
}
 
export default Button;