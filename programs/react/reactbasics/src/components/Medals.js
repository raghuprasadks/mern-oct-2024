import React,{useState} from 'react'

const Medals = () => {
    const [code, setCode] = useState()  
    const [name,setName] = useState()
    const [gold,setGold] = useState()
    const [silver,setSilver] = useState()
    const [bronze,setBronze] = useState()
    const [total,setTotal] = useState()
    const [medals, setMedals] = useState([])

    const addMedal = () => {
        let medal = {code,name,gold,silver,bronze,total}
        console.log("add medal ",medal)
        setMedals([...medals,medal])
        reset()
    }

    const reset=()=>{
        setCode('')
        setName('')
        setGold('')
        setSilver('')
        setBronze('')
        setTotal('')
    } 
  return (
    <div>
        <h1>Olympic Medals</h1>
        <div>
            <label>Country Code</label>
            <input type="text" value={code} onChange={(e)=>setCode(e.target.value)} /><br/>
            <label>Country Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
            
            <label>Gold</label>
            <input type="text" value={gold} onChange={(e)=>setGold(e.target.value)} /><br/>
            <label>Silver</label>
            <input type="text" value={silver} onChange={(e)=>setSilver(e.target.value)} /><br/>
            <label>Bronze</label>
            <input type="text" value={bronze} onChange={(e)=>setBronze(e.target.value)} /><br/>
            <label>Total</label>
            <input type="text" value={total} onChange={(e)=>setTotal(e.target.value)} /><br/>
            <button onClick={addMedal}>Add</button> 
        </div>
        <div>
          <table>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Gold</th>
              <th>Silver</th>
              <th>Bronze</th>
              <th>Total</th>
            </tr>
            {medals.map((medal) => <tr key={medal.code}>
              <td>{medal.code}</td>
              <td>{medal.name}</td>
              <td>{medal.gold}</td>
              <td>{medal.silver}</td>
              <td>{medal.bronze}</td>
              <td>{medal.total}</td>
              </tr>
              )}
          </table>
        </div>
    </div>
  )
}

export default Medals