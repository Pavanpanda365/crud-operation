import Grandchild1 from "./Grandchild1";

const Child1 = () => {
	return ( 
		<div>
			<h1>child compo</h1>
			<hr />
			<Grandchild1/>
		</div>
	 );
}
 
export default Child1;