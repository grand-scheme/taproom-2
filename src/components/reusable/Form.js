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
        <label htmlFor="name">Brew Name: </label>
        <input 
          type='text'
          name="name"
          placeholder="Brew Name"
        />
        <br />
        <label htmlFor="brandName">Brewing Company Brand Name: </label>
        <input 
          type='text'
          name="brandName"
          placeholder="Brand Name"
        />
        <br />
        <label htmlFor="price">$: </label>
        <input 
          type='text'
          name="price"
          placeholder="Price per Pint"
        />
        <br />
        <label htmlFor="abv">ABV: </label>
        <input 
          type='text'
          name="abv"
          placeholder="Alcohol by Volume"
        />
        <br />
        <label htmlFor="inventory">Inventory In Stock: </label>
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