import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <>
      <hr />
      <h2>{props.name}</h2>
    </>
  );
}

Keg.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  inventory: PropTypes.number.isRequired
};

export default Keg;