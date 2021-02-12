import React from 'react';
import { v4 } from 'uuid' ;
import PropTypes from "prop-types";

function AddNewKeg(props){
  function handleNewKegSubmission(e){
    e.preventDefault();
    props.OO_onNewKegCreation({
      name: e.target.name.value,
      brandName: e.target.brandName.value,
      price: e.target.price.value,
      abv: e.target.abv.value,
      inventory: e.target.inventory.value,
      kegId: e.target.kegId.value
    });
  }

  return(
    <>
      <h1>AddNewKeg placeholder</h1>
      <form onSubmit={handleNewKegSubmission}>
        {/* kegId={v4} */}
        <input 
          type='hidden'
          name="kegId"
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