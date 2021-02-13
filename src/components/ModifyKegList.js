import React from 'react';
import PropTypes from "prop-types";
import Form from "./Form";

function ModifyKegList(props){
  const { keg } = props;
  
  function handleEditKegSubmission(e){
    e.preventDefault();
    props.OO_onKegModification({
      name: e.target.name.value,
      brandName: e.target.brandName.value,
      price: parseInt(e.target.price.value),
      abv: parseInt(e.target.abv.value),
      inventory: parseInt(e.target.inventory.value),
      id: keg.id
    });
  }
  return(
    <>
      <h1>ModifyKegList placeholder</h1>
      <Form 
        formSubmissionHandler={handleEditKegSubmission} 
        buttonText="Modify Keg Details"
      />
    </>
  );
}

ModifyKegList.propTypes = {
  keg: PropTypes.object,
  OO_onKegModification: PropTypes.func
};

export default ModifyKegList;