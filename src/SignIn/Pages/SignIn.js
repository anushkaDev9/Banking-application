import React from "react";
import Input from "../Components/Input";
import './SignIn.css'
import { useReducer } from "react";
import Success from "../Components/Success";
const SignIn = () => {
  const initialState = {
    fields: {
      name: {
        value: "",
        isValid: false,
        errorMsg: "",
        success: false,
      },
      email: {
        value: "",
        isValid: false,
        errorMsg: "",
        success: false,
      },
      password: {
        value: "",
        isValid: false,
        errorMsg: "",
        success: false,
      },
    },
   successForm:false
  };
 const validate = (field, value) => {
   switch (field) {
     case "name":
       return value.length < 3 ? true : false;
     case "email":
       return !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)  ? true : false;
     case "password":
       return value.length < 8 ? true : false;
      default:
        return false
   }
 };
 const validateMessage = (field, value) => {
  switch (field) {
    case "name":
      if (value.length === 0) {
        return `${field} is required`;
      } else if (value.length < 3) {
        return `${field} needs be more than 3 letters`;
      } else {
        return `${field} field is valid`;
      }

    case "email":
      if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return "This email is not correct";
      } else {
        return `${field} field is valid`;
      }

    case "password":
      if (value.length === 0) {
        return `${field} is required`;
      } else if (value.length < 8) {
        return `${field} needs be more than 8 letters`;
      } else {
        return `${field} field is valid`;
      }
    default:
      return null;
  }
 };
 const successValidate=(field,value)=>{
  switch (field) {
    case "name":
     return value.length!==0&& value.length>=3?true:false
    case "email":
     return  value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)  ? true : false;
    case "password":
      return value.length !== 0 && value.length >= 8 ? true : false;
    default:
      return null
  }
 }

 const reducer = (state, action) => {
   switch (action.type) {
     case "change":
       return {
         ...state,

         fields: {
           ...state.fields,
           [action.payload.name]: {
             value: action.payload.value,
             isValid: validate(action.payload.name, action.payload.value),
             errorMsg: validateMessage(
               action.payload.name,
               action.payload.value
             ),
             success: successValidate(
               action.payload.name,
               action.payload.value
             ),
           },
         },
       };
     case "success":
       return {
         ...state,
         successForm: true,
       };
     case "reset":
       return initialState;
     
     case "error":
       return {
         ...state,

         fields: {
           ...state.fields,
           [action.payload.name]: {
             
             isValid: false,
             errorMsg: "Error:Enter the field",
             success: false,
           },
         },
       };
     default:
       return initialState;
   }
 };
 const [state, dispatch] = useReducer(reducer, initialState);
 const handler = (event) => {
   dispatch({
     type: "change",
     payload: {
       name: event.target.name,
       value: event.target.value,
     },
      
   });
 };
  const error = () => {
    if (state.fields.name.value === "") {
      dispatch({
        type: "error",
        payload: {
          name: "name",
        },
      });
    }
    if (state.fields.email.value === "") {
      dispatch({
        type: "error",
        payload: {
          name: "email",
        },
      });
    }
     if (state.fields.password.value === "") {
       dispatch({
         type: "error",
         payload: {
           name: "password",
         },
       });
     }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
   if (state.fields.name.success && state.fields.email.success && state.fields.password.success) {
  
     console.log("Form submitted:", state.fields);
     dispatch({type:"success"})
   }else{
   
     error()
   }
    
    
      
     
  };
  const click=()=>{
dispatch({ type: "reset" });

  }
  const btnHover=()=>{
    if(state.fields.name.success && state.fields.email.success && state.fields.password.success){
      document.getElementById("submit").classList.add("submitBtn");
      document.getElementById("submit").classList.remove("disable");
    }else{
    document.getElementById("submit").classList.add("disable");
    document.getElementById("submit").classList.remove("submitBtn");
    }
  }
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
        Create an Account
      </h2>
      {!state.successForm && (
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handler}
            className={`form-control ${state.fields.name.isValid && "error"} ${
              state.fields.name.success && "correct"
            }`}
            value={state.fields.name.value}
            style={{ width: "80%", marginTop: "6%", marginLeft: "10%" }}
          />
          <p
            className={`text ${state.fields.name.isValid && "error-text"} ${
              state.fields.name.success && "correct-text"
            }`}
          >
            {state.fields.name.errorMsg}
          </p>

          <Input
            type="text"
            name="email"
            onChange={handler}
            value={state.fields.email.value}
            placeholder="Email"
            className={`form-control ${state.fields.email.isValid && "error"} ${
              state.fields.email.success && "correct"
            }`}
            style={{ width: "80%", marginTop: "0.5%", marginLeft: "10%" }}
          />
          <p
            className={`text ${state.fields.email.isValid && "error-text"} ${
              state.fields.email.success && "correct-text"
            }`}
          >
            {state.fields.email.errorMsg}
          </p>
          <Input
            type="text"
            name="password"
            placeholder="Password"
            onChange={handler}
            value={state.fields.password.value}
            className={`form-control ${
              state.fields.password.isValid && "error"
            } ${state.fields.password.success && "correct"}`}
            style={{ width: "80%", marginTop: "0.5%", marginLeft: "10%" }}
          />
          <p
            className={`text ${state.fields.password.isValid && "error-text"} ${
              state.fields.password.success && "correct-text"
            }`}
          >
            {state.fields.password.errorMsg}
          </p>

          <button
            className="btn"
            style={{
              backgroundColor: "#C70039",
              color: "white",
             
            }}
            id="submit"
            onMouseOver={btnHover}
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>
      )}
      {state.successForm && <Success click={click} />}
    </div>
  );
};

export default SignIn;
