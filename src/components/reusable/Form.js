import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function Form(props){
  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>        
        <input 
          type='hidden'
          name="id"
          value= {v4()}
        />
        <br />
        <input 
          type='text'
          name="name"
          placeholder="Brew Name"
        />
        <br />
        <input 
          type='text'
          name="brandName"
          placeholder="Brand Name"
        />
        <br />
        <input 
          type='text'
          name="price"
          placeholder="Price per Pint"
        />
        <br />
        <input 
          type='text'
          name="abv"
          placeholder="Alcohol by Volume"
        />
        <br />
        <input 
          type='text'
          name="inventory"
          placeholder="Pints In Keg"
        />
        <br />
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