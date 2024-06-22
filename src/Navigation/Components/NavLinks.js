import React from 'react'
import {Link} from 'react-router-dom'
import './NavLinks.css'
const NavLinks = () => {
 
    
  const active = (text) => {
  
document.getElementById(text).style.backgroundColor = "black";
if (text !== "home") {
  document.getElementById("home").style.backgroundColor = "#C70039";
} 
 if (text !== "ca") {
  document.getElementById("ca").style.backgroundColor = "#C70039";
} 
 if (text !== "deposit") {
  document.getElementById("deposit").style.backgroundColor = "#C70039";
} 
 if (text !== "withdraw") {
  document.getElementById("withdraw").style.backgroundColor = "#C70039";
}
 if (text !== "balance") {
  document.getElementById("balance").style.backgroundColor = "#C70039";
} 
 if (text !== "alldata") {
  document.getElementById("alldata").style.backgroundColor = "#C70039";
}
     
        
  };
  return (
    <ul className="navbar-nav">
      <li class="nav-item">
        <Link
          to="/"
          className="nav-link text-light"
          id="home"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Navigate to Home page"
          onClick={() => {
            active("home");
          }}
        >
          Home
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to="/createaccount"
          className="nav-link text-light"
          id="ca"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Navigate to Create an account"
          onClick={() => {
            active("ca");
          }}
        >
          Create Account
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to="/deposit"
          className="nav-link text-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Navigate to Desposit money"
          id="deposit"
          onClick={() => {
            active("deposit");
          }}
        >
          Despoit
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to="/withdraw"
          className="nav-link text-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Navigate to withdraw money"
          id="withdraw"
          onClick={() => {
            active("withdraw");
          }}
        >
          Withdraw
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to="/balance"
          className="nav-link text-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Navigate to check balance"
          id="balance"
          onClick={() => {
            active("balance");
          }}
        >
          Balance
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to="/alldata"
          className="nav-link text-light"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Navigate to see alldata"
          id="alldata"
          onClick={() => {
            active("alldata");
          }}
        >
          All Data
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks
