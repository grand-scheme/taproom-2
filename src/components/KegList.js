import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props){
  return(
    <>
      {props.kegList.map((keg) =>
        <Keg
          OO_whenClickKeg = { props.onSelectKeg }
          id={keg.id}
          name={keg.name}
          brandName={keg.brandName}
          price={keg.price}
          abv={keg.abv}
          inventory={keg.inventory}
          key={keg.id}
          />
        )}
      <hr />
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onSelectKeg: PropTypes.func
};
export default KegList;