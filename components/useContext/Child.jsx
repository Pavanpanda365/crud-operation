import Grandchild from "./Grandchild";

const Child = ({a}) => {
	return ( 
		<div>
			<h1>CHILD COMPONENT</h1>
			<hr />
			<Grandchild a={a}/>
		</div>
	 );
}
 
export default Child;