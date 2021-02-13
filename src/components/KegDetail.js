import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { OO_keg, onClickingDelete, onClickingEdit } = props;
  
  return(
    <>
      <h1>placeholder for details</h1>
      <h2>{OO_keg.name} - {OO_keg.brandName}</h2>
        <p>{OO_keg.abv}</p>

        <button onClick={()=> onClickingEdit(OO_keg.id) }>
          Edit Keg
        </button>
        <button onClick={()=> onClickingDelete(OO_keg.id) }>
          Delete Keg
        </button>
    </>
  );
}

KegDetail.propTypes = {
  OO_keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;