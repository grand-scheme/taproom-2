import React from 'react';
import PropTypes from "prop-types";
import Form from "./reusable/Form";
import Information from "./reusable/Information";

function ModifyKegList(props){
  const { keg } = props;
  
  function handleEditKegSubmission(e){
    e.preventDefault();
    props.onUpdateKeg({
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
      <Information 
        entryFlag="Modifying Information For: "
        keg={keg}
      />
      <Form 
        formSubmissionHandler={handleEditKegSubmission} 
        buttonText="Modify Keg Details"
      />
    </>
  );
}

ModifyKegList.propTypes = {
  keg: PropTypes.object,
  onUpdateKeg: PropTypes.func
};

export default ModifyKegList;