import React from 'react';
import PropTypes from "prop-types";
import Form from "./Form";

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
      <Form 
        formSubmissionHandler={handleNewKegSubmission} buttonText="Add New Keg"
      />
    </>
  );
}

AddNewKeg.propTypes = {
  OO_onNewKegCreation: PropTypes.func
};

export default AddNewKeg;