import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit } = props;
  
  let stockMessage = null;
  const inStock = "Approximately " + keg.inventory + " pints available.";
  const lowStock = inStock + " Almost Empty!";
  const outOfStock = "Out of Stock!";

  if (keg.inventory === 0) {
    stockMessage = outOfStock;
  } else if (keg.inventory < 10 ) {
    stockMessage = lowStock;
  } else {
    stockMessage = inStock;
  }

  return(
    <>
      <h1>{keg.name}</h1>
      <h2>Proudly brewed by {keg.brandName}</h2>
        <p>
          {keg.abv}% Alcohol by Volume <br />
          $ {keg.price} per pint <br />
          {stockMessage}
        </p>

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