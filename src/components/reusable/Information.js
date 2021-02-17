import React from "react";
import PropTypes from "prop-types";

function Information(props){
  const { keg } = props;
  
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
      <h1>{props.entryFlag}{keg.name}</h1>
      <h2>Proudly brewed by {keg.brandName}</h2>
        <p>
          {keg.abv}% Alcohol by Volume <br />
          $ {keg.price} per pint <br />
          {stockMessage}
        </p>
    </>
  );
}

Information.propTypes = {
  keg: PropTypes.object,
  entryFlag: PropTypes.string
};

export default Information;