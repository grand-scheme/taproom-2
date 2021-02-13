import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { OO_keg, onClickingDelete } = props;
  
  return(
    <>
      <h1>placeholder for details</h1>
      <h2>{OO_keg.name} - {OO_keg.brandName}</h2>
        <p>{OO_keg.abv}</p>

        <button onClick={()=> onClickingDelete(OO_keg.id) }>
          Delete Keg
        </button>
    </>
  );
}

KegDetail.propTypes = {
  OO_keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;