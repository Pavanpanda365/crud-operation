import { useState } from "react";
import Child from "./Child";

const Parent = () => {
	let [a, setA] =useState("shivu")
	return (  
		<div>
			<h1 > PARENT COMPONENT</h1>
			<h1>from parent :{a}</h1>
			<hr />
			<Child a={a}/>
		</div>
	);
}
 
export default Parent;