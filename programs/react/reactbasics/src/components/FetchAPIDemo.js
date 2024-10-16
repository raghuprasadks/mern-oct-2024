import React from 'react'

const FetchAPIDemo = () => {

    const getTodo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))
    }
    
  return (
    <div>
        <h1>FetchAPIDemo</h1>
    <button onClick={getTodo}>Get Todo</button>    
    </div>
  )
}

export default FetchAPIDemo