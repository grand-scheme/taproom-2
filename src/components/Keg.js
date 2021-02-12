import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <>
      <h1>Keg placeholder</h1>
      <h2>{props.name}</h2>
    </>
  );
}

Keg.propTypes = {
  kegId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  inventory: PropTypes.number.isRequired
};

export default Keg;