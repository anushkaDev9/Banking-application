import React from 'react'
import './balance.css'
const Balance = (props) => {
 
  return (
    <div
      className="card shadow-lg rounded-sm"
      style={{
        fontFamily: "Open Sans",
        height: "10rem",
      }}
      id="cards-div"
    >
      <h2
        className=""
        style={{
          color: "#C70039",
          fontWeight: "light",
          textAlign: "center",
          marginTop: "5%",
        }}
      >
        Balance
      </h2>

      <h4 style={{ marginLeft: "8%", marginTop: "4%" }}>
        Total Balance:{props.balance}
      </h4>
    </div>
  );
}

export default Balance
