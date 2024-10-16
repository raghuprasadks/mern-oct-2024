import React,{useState} from 'react'

const FetchAPIDemo = () => {
    const [todos, setTodos] = useState([])

    const getTodo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(res => res.json())
       // .then(data => console.log(data))
       .then(data=>setTodos(data))
        .catch(error => console.log(error))
    }
    
  return (
    <div>
        <h1>FetchAPIDemo</h1>
    <button onClick={getTodo}>Get Todo</button>   
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            {todos.map((todo) => <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed.toString()}</td>
            </tr>)}
        </tbody>
        </table> 
    </div>
  )
}

export default FetchAPIDemo