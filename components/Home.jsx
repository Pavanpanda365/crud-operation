import { useEffect, useRef, useState } from "react"

const Home = () => {
    let name = useRef()
    let email = useRef()
    let updatename = useRef()
    let updateemail = useRef()
    let [count, setCount] = useState(0)
    let [update, setUpdate] = useState(false)
    let [updateid, setUpdateid] = useState(0)
    let [datas, setDatas] = useState([])


    useEffect(() => {
        fetch(" http://localhost:4000/task")
            .then((res) => { return res.json() })
            .then((data) => { setDatas(data) })
    }, [count])
    let handleadd = () => {
        let config = {

            name: name.current.value,
            email: email.current.value,
        }
        fetch("http://localhost:4000/task", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(config)
        })
            .then(() => { alert("data added"); setCount(count + 1) })
    }

    let handleDelete = (id) => {
        fetch(`http://localhost:4000/task/${id}`, {
            method: "DELETE"
        })
            .then(() => { setCount(count + 1); alert("data deleted") })
    }
    let handleUpdate = (id) => {
        fetch(`http://localhost:4000/task/${id}`)
            .then((res) => { return res.json() })
            .then((data) => {
                updatename.current.value = data.name;
                updateemail.current.value = data.email
            })
    }

    let updatedata = (id) => {
        let updateddata =
        {
            name: updatename.current.value,
            email: updateemail.current.value
        }
        fetch(`http://localhost:4000/task/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateddata)
        }).then(() => {  alert("data updated"); setCount(count + 1) })

    }

   

    return (
        <div className="formpage">
            <h1>CRUD Operation</h1>
			<hr />
            <form onSubmit={handleadd}>

                <input type="text" ref={name} placeholder="Enter Name" />
                <input type="email" ref={email} placeholder="Enter Email" />
                <input type="submit" value={"ADD"} />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((data, ind) => {
                            return (
                                <tr>
                                    <td>{ind + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <button onClick={() => { handleUpdate(data.id); setUpdateid(data.id); setUpdate(true) }} >Edit</button>
                                        <button onClick={() => { handleDelete(data.id) }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
			<hr />
            {update &&
                <div>
                    <form className="updateform">

                        <input type="text" ref={updatename} placeholder="Enter Name" />
                        <input type="email" ref={updateemail} placeholder="Enter Email" />
                        <input type="submit" value={"UPDATE"} onClick={() => { updatedata(updateid); setUpdate(false) }} />
                        <input  type="reset" value={"CANCEL"} onClick={() => { setUpdate(false) }} />
                    </form>

                </div>}
        </div>
    )
}
export default Home;