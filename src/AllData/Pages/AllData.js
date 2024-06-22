import React from 'react'
import "./AllData.css"
const AllData = (props) => {
 
  return (
    <div
      className="card shadow-lg rounded-sm"
      style={{
        fontFamily: "Open Sans",
        height: "25rem",
      }}
      id="card-div"
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
        All Data
      </h2>
      <h4 style={{ marginLeft: "8%", marginTop: "4%" }}>
        Total Balance:{props.balance}
      </h4>
      <div style={{ height: "17rem", overflow: "auto" }}>
        <table className="table" style={{ marginTop: "2%" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Amount</th>
              <th scope="col">Comment</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item) => {
              return (
                <tr id={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.comment}</td>
                  <td>{item.type}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllData
