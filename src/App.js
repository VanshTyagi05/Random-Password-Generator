
import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { LC, NC, SC, UC } from "./DATA/PassChar";

function App() {
  let [upperCase,setUpperCase]=useState(false)
  let [lowerCase,setLowerCase]=useState(false)
  let [symbolCase,setSymbolCase]=useState(false)
  let [numberCase,setNumberCase]=useState(false)
  let [passwordlen,setPasswordLen]=useState(10)
  let [fpass,setFpass]=useState('')

  let createPassword=()=>{
    let finalPass=''
    let charSet=''
    if(upperCase|| lowerCase|| symbolCase|| numberCase){
      // toast.success("Password Created!");
        if(upperCase)charSet+=UC;
        if(lowerCase)charSet+=LC;
        if(symbolCase)charSet+=SC;
        if(numberCase)charSet+=NC;
          for(let i=0; i<10;i++){
             finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
          }
        setFpass(finalPass)
         
    }
    else{
      toast.error("Password Not Created! Please select one Checkbox");
    }
   
  }
   let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
   }

  return (
    
    <div className="App">
      <ToastContainer />
      <>
        <div className="passwordBox">
          <h2>Password Generator </h2>
          <div className="passwordBoxin">
            <input type="text" value={fpass} readOnly></input>
            <button onClick={copyPass}> <span>Copy</span></button>
          </div>

          <div className="passlength">
            <label>Password Length</label>
            <input type="number" max={20} min={10}  value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)
            }>

            </input>
          </div>
          <div className="passlength">
            <label>Include UpperCase</label>
            <input type="checkbox" checked={upperCase} onChange={()=>setUpperCase(!upperCase)} ></input>
          </div>
          <div className="passlength">
            <label>Include LowerCase</label>
            <input type="checkbox" checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}></input>
          </div>
          <div className="passlength">
            <label>Include Symbols</label>
            <input type="checkbox"checked={symbolCase} onChange={()=>setSymbolCase(!symbolCase)} ></input>
          </div>
          <div className="passlength">
            <label>Include Numbers</label>
            <input type="checkbox" checked={numberCase} onChange={()=>setNumberCase(!numberCase)}></input>
          </div>
          <button className="btn" onClick={createPassword}>
            Generate Password
          </button>
        </div>
      </>
    </div>
  );
}

export default App;
