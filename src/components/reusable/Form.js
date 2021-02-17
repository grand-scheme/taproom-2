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
        <label for="name">Brew Name: </label>
        <input 
          type='text'
          name="name"
          placeholder="Brew Name"
        />
        <br />
        <label for="brandName">Brewing Company Brand Name: </label>
        <input 
          type='text'
          name="brandName"
          placeholder="Brand Name"
        />
        <br />
        <label for="price">$: </label>
        <input 
          type='text'
          name="price"
          placeholder="Price per Pint"
        />
        <br />
        <label for="abv">ABV: </label>
        <input 
          type='text'
          name="abv"
          placeholder="Alcohol by Volume"
        />
        <br />
        <label for="inventory">Inventory In Stock: </label>
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