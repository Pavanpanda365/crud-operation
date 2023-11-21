import { UseConsumer } from './context'
const Greatgrandchild1 = () => {

	return (
		<UseConsumer>
			{
				(user) => {
					return (
						<>
							<h1>GreatGrandChild</h1>
							<h2>from Parent1 : {user}</h2>
						</>
					)}
			}
		</UseConsumer>
	);
}

export default Greatgrandchild1;
