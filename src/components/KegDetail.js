import React from "react";
import PropTypes from "prop-types";
import Information from "./reusable/Information";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit } = props;

  return(
    <>
      <Information 
        entryFlag=""
        keg={keg}/>

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