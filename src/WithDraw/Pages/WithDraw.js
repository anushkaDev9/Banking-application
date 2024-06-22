import React from 'react'
import Input from "../../SignIn/Components/Input"
import SucessDiv from '../../Deposit/SucessDiv'
import { useReducer } from 'react'
import './WithDraw.css'
const WithDraw = (props) => {
    const initailState = {
      name: {
        value: "",
        error: false,
        errorMsg: "",
      },
      comment: {
        value: "",
        error: false,
        errorMsg: "",
      },
      balance: props.balance,
      success: false,
    };
  const reducer = (state, action) => {
    switch (action.type) {
      case "deposit":
        return {
          ...state,
          [action.payload.name]: {
            value: action.payload.value,
            error: validate(action.payload.value, action.payload.name),
            errorMsg: validateMsg(action.payload.value, action.payload.name),
          },
        };
      case "submit":
        return {
          ...state,
          success: true,
          balance: state.balance - dep(state.name.value),
        };
      case "reset":
        return initailState;
      
      case "error":
        return {
          ...state,
          [action.payload.name]: {
            error: true,
            errorMsg: "Error:Enter Amount",
          },
        };
      default:
        return initailState;
    }
  };
  const error = () => {
    if (state.name.value === "") {
      dispatch({
        type: "error",
        payload: {
          name: "name",
        },
      });
    }
    if (state.comment.value === "") {
     
      dispatch({
        type: "error",
        payload: {
          name: "comment",
        },
      });
    }
  };
  
   const validate = (text,field) => {
    switch(field){
      case"name":
let num=parseInt(text)
   if(text.length===0){
    return true
   }
   if(isNaN(num)){
    return true
   }else{
    if(num<0){
      return true
    }else if (num > props.balance) {
      return true
    } else {
      return false;
    }
   }
   case"comment":
    if(text.length<=5){
    return true
   }else{
    return false
   }
   default:
    return null
    }
   
   };
   const dep=(val)=>{
    let num=parseInt(val)
         if (!isNaN(num)) {
           return num;
         } 
   }
    const validateMsg = (text, field) => {
      switch (field) {
        case "name":
          let num = parseInt(text);
          if (text.length === 0) {
            return "Error:Amount is required";
          }
          if (isNaN(num)) {
            return "Error:Needs to be a number";
          } else {
            if (num <= 0) {
              return "Error:amount needs to be positive or more than zero";
            } else if (num > props.balance) {
              return "Error:Insufficient Balance";
            } else {
              return "Success:Valid Amount";
            }
          }
        case "comment":
          if (text.length <= 5) {
            return "Needs to be more than 5 letters";
          } else {
            return "Valid";
          }
        default:
          return null;
      }
    };
  const [state, dispatch] = useReducer(reducer, initailState);
  const handler = (event) => {
    dispatch({
      type: "deposit",
      payload: {
        name: event.target.name,
        value: event.target.value,
      },
    });
  };
const giveDate = () => {
  const d = new Date();
  let month = d.getMonth();
  let date = d.getDate();
  let year = d.getFullYear();
  let full = `${date}-${month}-${year}`;
  return full;
};
  const submit = (event) => {
    event.preventDefault();
    if (state.name.error || state.comment.error) {
      
    } else {
      if (state.name.value === "" || state.comment.value === "") {
        error()
      } else if (state.name.value>state.balance) {
             
      } else {
        dispatch({
          type: "submit",
        });
        let date = giveDate();
        props.addData(state.name.value, state.comment.value, "Withdraw", date);
      }

     
    }
  };
  const back = () => {
    dispatch({
      type: "reset",
    });
  };
  const btnHover = () => {
    
    if (state.name.error && state.comment.error) {
      document.getElementById("submit").classList.add("disable");
      document.getElementById("submit").classList.remove("submitBtn");
    } else {
      if (state.name.value === "" && state.comment.value === "") {
       
        document.getElementById("submit").classList.add("disable");
        document.getElementById("submit").classList.remove("submitBtn");
      } else {
        document.getElementById("submit").classList.add("submitBtn");
        document.getElementById("submit").classList.remove("disable");
      }
    }
  };
   props.setBalance(state.balance);
  return (
    <div
      className="card shadow-lg rounded-sm"
      style={{
        fontFamily: "Open Sans",
        height: "28rem",
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
        WithDraw
      </h2>
      {!state.success && (
        <div>
          <h4 style={{ marginLeft: "8%", marginTop: "15%" }}>
            Total Balance:{state.balance}
          </h4>
          <Input
            type="text"
            name="name"
            placeholder="Enter the wihtdraw amount"
            className={`form-control`}
            value={state.name.value}
            onChange={handler}
            style={{ width: "80%", marginLeft: "8%", marginTop: "4%" }}
          />
          <p className={`${state.name.error ? "error-text" : "correct-text"} `}>
            {state.name.errorMsg}
          </p>
          <Input
            type="text"
            name="comment"
            placeholder="Enter any comments"
            className={`form-control`}
            value={state.comment.value}
            onChange={handler}
            style={{ width: "80%", marginLeft: "8%", marginTop: "4%" }}
          />
          <p
            className={`${state.comment.error ? "error-text" : "correct-text"}`}
          >
            {state.comment.errorMsg}
          </p>
          <button
            onClick={submit}
            className="btn "
            style={{
              backgroundColor: "#C70039",
              color: "white",
            }}
            id="submit"
            onMouseOver={btnHover}
          >
            Withdraw
          </button>
        </div>
      )}
      {state.success && (
        <SucessDiv
          balance={state.balance}
          msg=" Your amount has withdrawed successfully."
          onClick={back}
          header="withdraw"
        />
      )}
    </div>
  );
}

export default WithDraw
