import React from 'react'
import { TiTickOutline } from "react-icons/ti";
const SucessDiv = (props) => {
  return (
    <div>
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "2px solid green",
          backgroundColor: "green",
          borderRadius: "40px",
          marginTop: "5%",
          marginLeft: "45%",
        }}
      >
        <TiTickOutline style={{ fontSize: "2rem", color: "white" }} />
      </div>
      <h3
        style={{
          color: "green",
          fontWeight: "bold",
          marginLeft: "40%",
          marginTop: "3%",
        }}
      >
        Success
      </h3>
      <p style={{ textAlign: "center", marginTop: "3%" }}>
       {props.msg}
      </p>
      <h4 style={{ marginLeft: "30%" }}>Total Balance:{props.balance}</h4>
      <button onClick={props.onClick}
        className="btn"
        style={{
          backgroundColor: "#C70039",
          color: "white",
          width: "40%",
          marginLeft: "30%",
          marginTop: "4%",
        }}
      >
        Back To {props.header}
      </button>
    </div>
  );
}

export default SucessDiv
