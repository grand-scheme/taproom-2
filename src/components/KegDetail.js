import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { OO_keg } = props;
  return(
    <>
      <h1>placeholder for details</h1>
      {OO_keg.name}
    </>
  );
}

KegDetail.propTypes = {
  OO_keg: PropTypes.object
};

export default KegDetail;