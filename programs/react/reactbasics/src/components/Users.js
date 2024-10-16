import React,{useState,useEffect} from 'react'

const Users = () => {

    let url = 'https://jsonplaceholder.typicode.com/users'
    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }

    useEffect(() => {
        console.log("use effect")
        getUsers()
    },[])  
  return (
    <div className="users-container">
        <h1>Users</h1>
        <table className="users-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address.city}</td>
                    <td>{user.company.name}</td>
                </tr>)}
            </tbody>
            </table>    
    </div>
  )
}

export default Users