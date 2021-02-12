import React from 'react';
import { v4 } from 'uuid' ;

function AddNewKeg(){
  function handleNewKegSubmission(e){
    e.preventDefault();
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

export default AddNewKeg;