import React,{useState} from 'react'

import {useNavigate} from 'react-router-dom'

const SignUp = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [mobile,setMobile] = useState('') 
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const navigate = useNavigate()

  const url='http://localhost:5000/user'

  const signup = async (e) => {
    e.preventDefault()
    const response = await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        mobile,
        password
      })
    })
    const data = await response.json()
    if(data.error){
      setError(data.error)
    }else{
      navigate('/login')
    }
  }

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={signup}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <br/>

        <label>Email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <label>Mobile</label>
        <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
        <br/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <button type="submit">SignUp</button>   
      </form>
      
      </div>
  )
}

export default SignUp