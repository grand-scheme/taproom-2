import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { OO_keg } = props;
  return(
    <>
      <h1>placeholder for details</h1>
      <h2>{OO_keg.name} - {OO_keg.brandName}</h2>
        <p>{OO_keg.abv}</p>
    </>
  );
}

KegDetail.propTypes = {
  OO_keg: PropTypes.object
};

export default KegDetail;