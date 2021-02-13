import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit } = props;
  
  return(
    <>
      <h1>placeholder for details</h1>
      <h2>{keg.name} - {keg.brandName}</h2>
        <p>{keg.abv}</p>

        <button onClick={()=> onClickingEdit(keg.id) }>
          Edit Keg
        </button>
        <button onClick={()=> onClickingDelete(keg.id) }>
          Delete Keg
        </button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;