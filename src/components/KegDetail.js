import React from "react";
import PropTypes from "prop-types";
import Information from "./reusable/Information";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit, onClickingSell } = props;

  return(
    <>
      <Information 
        entryFlag=""
        keg={keg}/>

        {/* TODO */}
        <button onClick={()=> onClickingSell(keg.id) }>
          Sell Pint
        </button>

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
  onClickingSell: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;