import React from 'react'
import { RiBankLine } from "react-icons/ri";
import './BadBank.css'
const BadBank = () => {
  return (
    <div className="card shadow-lg" style={{}} id="cardd-div">
    
        <h2 className='justify-content-center' style={{color:"#C70039",fontWeight:'bold',textAlign:'center'}}>
        BadBank 
        </h2>
      <p className="p-3" style={{fontSize:"1.2rem"}}>
        Welcome to the bank<br/>
         You can move around using the navigation bard.
      </p>
    
       
  
      <RiBankLine style={{fontSize:'14rem',color:"#C70039",marginTop:"3%",marginLeft:"25%"}} />
    </div>
  );
}

export default BadBank
