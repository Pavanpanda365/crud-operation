import Greatgrandchild from "./Greatgrandchild";

const Grandchild = ({a}) => {
	return (  
		<div>
			<h1>GRAND CHILD COMPONENT</h1>
			<hr />
			<Greatgrandchild a={a}/>
		</div>
	);
}
 
export default Grandchild;