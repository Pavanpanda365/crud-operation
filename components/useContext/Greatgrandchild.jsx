import { createContext } from "react";

const Greatgrandchild = ({a}) => {
	
	return ( 
		<div>
			<h1>GREAT GRAND CHILD COMPONENT</h1>
			<h1> from last child :{a}</h1>
		</div>
	 );
}
 
export default Greatgrandchild;