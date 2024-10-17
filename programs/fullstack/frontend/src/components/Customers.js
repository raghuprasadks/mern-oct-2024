import React,{useState,useEffect} from 'react'

const Customers = () => {
    const [id,setId]=useState()
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [mobile,setMobile]=useState()
    const [location,setLocation]=useState()
    const [zipcode,setZipcode]=useState()
    const [customers,setCustomers]=useState([])
    let url="http://localhost:5000/customers"

    const addCustomer=()=>{

        let customer = {name,email,mobile,location,zipcode}
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(customer)
        }).then((res)=>res.json())
        .then((data)=>{
            //setCustomers([...customers,data])
            console.log(data)
            console.log("before reset")
            resetCustomer()
            alert("Customer added successfully")
            getCustomers()
            
        })
    }

    const getCustomers=()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            setCustomers(data)
        })
    }   

    useEffect(()=>{
        getCustomers()
    },[])   

    const deleteCustomer=(id)=>{
        fetch(url+"/"+id,{
            method:'DELETE'
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            alert("Customer deleted successfully")
            getCustomers()
        })
    }

    const resetCustomer=()=>{
        console.log('reset customer')
       // setId("")
        setName("")
        setEmail("")
        setMobile("")
        setLocation("")
        setZipcode("")
    }

    const editCustomer=(customer)=>{
        console.log("edit ",customer)
        setId(customer.id)
        setName(customer.name)
        setEmail(customer.email)
        setMobile(customer.mobile)
        setLocation(customer.location)
        setZipcode(customer.zipcode)
    }


  return (
    <div>
    <div>
        <h1>Customer Master</h1>
        <label>Name</label>
        <input type="text" value ={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label>Email</label>
        <input type="text" value ={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label>Mobile</label>
        <input type="text" value ={mobile}  onChange={(e)=>setMobile(e.target.value)}/><br/>
        <label>Location</label>
        <input type="text" value ={location} onChange={(e)=>setLocation(e.target.value)}/><br/>
        <label>Zipcode</label>
        <input type="text" value ={zipcode} onChange={(e)=>setZipcode(e.target.value)}/><br/>
        <button onClick={addCustomer}>Save</button>
        
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Location</th>
                    <th>Zipcode</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((customer)=>{
                        return(
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.mobile}</td>
                                <td>{customer.location}</td>
                                <td>{customer.zipcode}</td>
                                <td><button onClick={()=>deleteCustomer(customer.id)}>Delete</button></td>
                                <td><button onClick={()=>editCustomer(customer)}>Edit</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Customers