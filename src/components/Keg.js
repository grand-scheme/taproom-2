import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return(
    <>
      <div onClick = {() => props.whenClickKeg(props.id)}>
        <h2>{props.name}</h2>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  inventory: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  whenClickKeg: PropTypes.func
};

export default Keg;