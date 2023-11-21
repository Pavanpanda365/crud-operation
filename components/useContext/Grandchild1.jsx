import Child1 from "./Child1";
import Greatgrandchild1 from "./Greatgrandchild1";

const Grandchild1= () => {
	return ( 
		<div>
			<h1>Grandchild compo</h1>
			<hr />
			<Greatgrandchild1/>
		</div>
	 );
}
 
export default Grandchild1;