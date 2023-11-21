import { useEffect, useRef, useState } from "react";


const Crud = () => {

	let [users, setUsers] = useState([])
	let [stop, setStop] = useState(0);
	let [update, setUpdate] = useState(false)
	let [updateid, setUpdateid] = useState(0)
	let name = useRef();
	let branch = useRef();
	let yop = useRef();
	let mail = useRef();
	let updatename = useRef();
	let updatebranch = useRef();
	let updateyop = useRef();
	let updateemail = useRef();



	useEffect(() => {
		fetch("http://localhost:4000/task")
			.then((res) => { return res.json() })
			.then((data) => { setUsers(data) })
	}, [stop])

	let hanldeSubmit = (e) => {
		e.preventDefault();

		let newUser = {
			name: name.current.value,
			branch: branch.current.value,
			yop: yop.current.value,
			mail: mail.current.value,
		}

		fetch("http://localhost:4000/task", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newUser)
		})
			.then(() => {
				alert("data added")
				setStop(stop + 1)
			})
	}

	let remove = (id) => {
		fetch(`http://localhost:4000/task/${id}`, {
			method: "DELETE"
		})
			.then(() => {
				alert("data removed")
				setStop(stop + 1)
			})
	}

	let handleUpdate = (id) => {
		fetch(`http://localhost:4000/task/${id}`)
			.then((res) => { return res.json() })
			.then((data) => {
				updatename.current.value = data.name;
				updatebranch.current.value = data.branch;
				updateyop.current.value = data.yop;
				updateemail.current.value = data.mail
			})
	}

	let updatedata = (id) => {
		let updateddata = {
			name: updatename.current.value,
			branch: updatebranch.current.value,
			yop: updateyop.current.value,
			mail: updateemail.current.value
		}

		
		 fetch(`http://localhost:4000/task/${id}`, {
		     method: "PUT",
		     headers: { "Content-Type": "application/json" },
		     body: JSON.stringify(updateddata)
		 }).then(() => {  alert("data updated")
		  setStop(stop + 1) })
	}

	return (
		<div>
			<h1>CRUD OPERATION</h1>
			<form onSubmit={hanldeSubmit}>
				<input type="text" placeholder="Name" ref={name} /><br />
				<input type="text" placeholder="Branch" ref={branch} /><br />
				<input type="number" placeholder="YOP" ref={yop} /><br />
				<input type="email" placeholder="Mail Id" ref={mail} /><br />
				<input type="submit" value="Add" />
			</form>
			{/* <hr /> */}
			<table>
				<thead>
					<tr>
						<td>S.NO</td>
						<td>NAME</td>
						<td>BRANCH</td>
						<td>YOP</td>
						<td>MAIL ID</td>
						<td>ACTION</td>
					</tr>
				</thead>
				<tbody>
					{
						users.map((user) => {
							return (
								<tr>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.branch}</td>
									<td>{user.yop}</td>
									<td>{user.mail}</td>
									<td>
										<button type="delete" onClick={() => { remove(user.id) }}>Delete</button>
										<button type="update" onClick={() => { handleUpdate(user.id);setUpdateid(user.id); setUpdate(true) }}>Edit</button>
										
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
			{/* <hr /> */}
			{update && <div className="last">
				<form>
					<input type="text" placeholder="Name" ref={updatename} /><br />
					<input type="text" placeholder="Branch" ref={updatebranch} /><br />
					<input type="number" placeholder="YOP" ref={updateyop} /><br />
					<input type="email" placeholder="Mail Id" ref={updateemail} /><br />
					<input type="submit" value={"Update"} onClick={() => { updatedata(updateid); setUpdate(false) }} />
					<input type="reset" value={"cancel"} onClick={()=>{setUpdate(false)}} />
				</form>
			</div>}
		</div>
	);
}

export default Crud;