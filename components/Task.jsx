import { useEffect, useRef, useState } from "react";

const Task = () => {

	let [products, setProducts] = useState([])
	let [stop, setStop] = useState(0)
	let pname = useRef();
	let price = useRef();
	let color = useRef();


	useEffect(() => {
		fetch("http://localhost:4000/products")
			.then((res) => { return res.json() })
			.then((data) => { setProducts(data) })
	}, [stop])

	let handleSubmit = (e) => {
		e.preventDefault();

		let newUsers = {
			pname: pname.current.value,
			price: price.current.value,
			color: color.current.value
		}

		fetch("http://localhost:4000/products", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newUsers)
		})
			.then(() => {
				alert("data added")
				setStop(stop + 1)
			})
	}

	let remove = (id) => {
		fetch(`http://localhost:4000/products/${id}`, {
			method: "DELETE"
		})
			.then(() => {
				alert("data removed")
				setStop(stop + 1)
			})
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="product name" ref={pname} /><br />
				<input type="number" name="" id="" placeholder="price" ref={price} /><br />
				<input type="text" placeholder="color" ref={color} /><br />
				<input type="submit" value="Submit" />
			</form>
			<hr />
			<table>
				<thead>
					<tr>
						<td>S.NO</td>
						<td>PRODUCT</td>
						<td>PRICE</td>
						<td>COLOR</td>
						<td>ACTION</td>
					</tr>
				</thead>
				<tbody>
					{
						products.map((product, index) => {
							return (
								<tr>
									<td>{index + 1}</td>
									<td>{product.pname}</td>
									<td>{product.price}</td>
									<td>{product.color}</td>
									<td>
										<button>Update</button>
										<button onClick={() => { remove(product.id) }}>delete</button>
									</td>
								</tr>
							)
						})
					}

				</tbody>
			</table>
		</div>
	);
}

export default Task;