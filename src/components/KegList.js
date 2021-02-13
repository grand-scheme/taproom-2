import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props){
  return(
    <>
      {props.OO_kegList.map((OO_keg) =>
        <Keg
          OO_whenClickKeg = { props.onSelectKeg }
          id={OO_keg.id}
          name={OO_keg.name}
          brandName={OO_keg.brandName}
          price={OO_keg.price}
          abv={OO_keg.abv}
          inventory={OO_keg.inventory}
          key={OO_keg.id}
          />
        )}
      <hr />
    </>
  );
}

KegList.propTypes = {
  OO_kegList: PropTypes.array,
  onSelectKeg: PropTypes.func
};
export default KegList;