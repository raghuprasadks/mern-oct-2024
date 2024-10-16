import React,{useState} from 'react'

const SimpleMathCalculator = () => {
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [operator,setOperator] = useState('+')
    const [result, setResult] = useState(0)

    const calculate = () => {
        switch(operator){
            case '+':
                setResult(parseInt(firstNumber) + parseInt(secondNumber))
                break
            case '-':
                setResult(parseInt(firstNumber) - parseInt(secondNumber))
                break
            case '*':
                setResult(parseInt(firstNumber) * parseInt(secondNumber))
                break
            case '/':
                setResult(parseInt(firstNumber) / parseInt(secondNumber))
                break
            default:
                setResult(0)
        }
    }
  return (
    <>
        <h1>Simple Math Calculator</h1>
        <input type="number" value={firstNumber} onChange={(e)=>setFirstNumber(e.target.value)} />
        <select onChange={(e)=>setOperator(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">x</option>
            <option value="/">/</option>
            </select>
        <input type="number" value={secondNumber} onChange={(e)=>setSecondNumber(e.target.value)} />
        <button onClick={calculate}>Calculate</button>
        <h2>Result: {result}</h2>
    </>
  )
}

export default SimpleMathCalculator