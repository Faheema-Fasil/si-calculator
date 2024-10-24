import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';



function App() {

  const[principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[interest,setinterest]=useState(0)
  const[isPrincipleValid,setisPrincipleValid]=useState(false)
  const[isYearValid,setYearValid]=useState(false)
  const[isRateValid,setRateValid]=useState(false)


  const handleValidation=(tag)=>{
    const{name,value}=tag
    console.log(name,value);
    if (!!value.match(/^\d*.?\d+$/)) {
      if (name=='principle') {
        setPrinciple(value)
        setisPrincipleValid(false)

        
      }else if (name=='Year') {
        setYear(value)
        setYearValid(false)
      }
      else if (name=='rate') {
        setRate(value)
        setRateValid(false)
      }
    }else{
      if (name=='principle') {
        setPrinciple(value)
        setisPrincipleValid(true)
        
      }
      else if (name=='Year') {
        setYear(value)
        setYearValid(true)
      }
      else if (name=='rate') {
        setRate(value)
        setRateValid(true)
      }
    }
    
    
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    setinterest((principle*rate*year)/100)
    
    
  }
  const handelReset=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setinterest(0)
    setisPrincipleValid(false)
    setYearValid(false)
    setRateValid(false)
  }

  return (
    
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-primary'>
      <div className="box bg-info p-5 rounded">
        <h2 className='text-danger fw-bolder' style={{textDecoration:'underline'}}>Simple-Interest-Calculator</h2>
        <p className='text-center'>Calculate our simple interest with us</p>
        <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
          <h1 className='text-danger'>&#8377; {interest}</h1>
        </div>
        <div className="mt-5">
          <form className="border rounded p-3 d-flex flex-column p-3">
              <TextField id="principle" name='principle' value={principle} label="Principle Amount" variant="outlined" onChange={e=>handleValidation(e.target)} />
                {isPrincipleValid&&<div className="mb-2 text-danger fw-bolder">
                  *invalid input
                </div>}
              <TextField id="Year" name='Year' value={year}  onChange={e=>handleValidation(e.target)} label="Year" variant="filled" />
              {isYearValid&&<div className="mb-2 text-danger fw-bolder">
                  *invalid input
                </div>}
              <TextField id="rate" name='rate' value={rate} onChange={e=>handleValidation(e.target)} label="Rate of Interest" variant="standard" /> 
              {isRateValid&&<div className="mb-2 text-danger fw-bolder">
                  *invalid input
                </div>}
          </form>
                <div className="mt-3 d-flex justify-content-between">
                
                <Button onClick={handleCalculate} variant="contained">Calculate</Button>
                <Button onClick={handelReset} variant="outlined">Reset</Button>
                </div>
             </div>
         </div>
      </div>











  
    
    
  )
}

export default App
