import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { NN_ticket } = props;
  return(
    <>
      <h1>placeholder for details</h1>
      {NN_ticket.name}
    </>
  );
}

KegDetail.propTypes = {
  NN_ticket: PropTypes.object
};

export default KegDetail;