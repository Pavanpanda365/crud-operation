import {useState, UseProvider } from "./context";

import Child1 from "./Child1";


const Parent1 = () => {
	let [user, setUser] =useState("dakka")
	return ( 
		<UseProvider value={user}>
			<h1>Parent1</h1>
			<h2>passing data :{user}</h2>
			<hr />
			<Child1/>
		</UseProvider>
	 );
}
 
export default Parent1 ;

