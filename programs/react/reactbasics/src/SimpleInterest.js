import React,{useState} from 'react'

const SimpleInterest = () => {
    const [principal, setPrincipal] = useState();
    const [roi, setRoi] = useState();
    const [time, setTime] = useState();
    const [si, setSi] = useState();

    const calculateSI =()=>{
        let simpleInterest = (principal*roi*time)/100;
        setSi(simpleInterest);
    }

  return (
    <div>
        <h1>Simple Interest Calculator</h1>
        <label>Enter Principal Amount</label><br/>
        <input type="text" id="principal" value = {principal} onChange={(e)=>setPrincipal(e.target.value)}></input><br/>
        <label>Enter Rate of interest</label><br/>
        <input type="text" id="roi" value ={roi} onChange={(e)=>setRoi(e.target.value)}></input><br/>

        <label>Enter Time in years</label><br/>
        <input type="text" id="time" value ={time} onChange={(e)=>setTime(e.target.value)}></input><br/>
        <button onClick={calculateSI}>Calculate</button>
        <p>State</p>
        <p>Principal - {principal} Rate - {roi} Time - {time}</p>
        <p>Simple Interest - {si}</p>
    </div>
  )
}

export default SimpleInterest