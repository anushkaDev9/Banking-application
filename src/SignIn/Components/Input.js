import React from "react";


const Input = (props) => {
  

 
  
  
  return (
    <div>
      <input
        type="text"
        name={props.name}
        value={props.Value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={`${props.className}`}
        style={props.style}
        required
      />
      
    </div>
  );
};

export default Input;
