import React from "react";
import PropTypes from "prop-types";

function Form(props){
  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>        
        <input 
          type='hidden'
          name="id"
          value= {v4()}
        />
        <input 
          type='text'
          name="name"
          placeholder="Brew Name"
        />
        <input 
          type='text'
          name="brandName"
          placeholder="Brand Name"
        />
        <input 
          type='text'
          name="price"
          placeholder="Price per Pint"
        />
        <input 
          type='text'
          name="abv"
          placeholder="Alcohol by Volume"
        />
        <input 
          type='text'
          name="inventory"
          placeholder="Pints In Keg"
        />
        <button type="submit"> {props.buttonText} </button>
      </form>
    </>
  );
}

Form.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default Form;