import React from 'react';
import { v4 } from 'uuid' ;
import PropTypes from "prop-types";

function AddNewKeg(props){
  function handleNewKegSubmission(e){
    e.preventDefault();
    props.OO_onNewKegCreation({
      name: e.target.name.value,
      brandName: e.target.brandName.value,
      price: parseInt(e.target.price.value),
      abv: parseInt(e.target.abv.value),
      inventory: parseInt(e.target.inventory.value),
      id: e.target.id.value
    });
  }

  return(
    <>
      <h1>AddNewKeg placeholder</h1>
      <form onSubmit={handleNewKegSubmission}>
        {/* id={v4} */}
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
        <button type="submit"> Add </button>
      </form>
    </>
  );
}

AddNewKeg.propTypes = {
  OO_onNewKegCreation: PropTypes.func
};

export default AddNewKeg;