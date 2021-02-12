import React from 'react';
import Keg from './Keg';
import {kegsList} from '../data/kegs'
import PropTypes from "prop-types";

function KegList(props){
  return(
    <>
      {kegsList.map((keg) =>
      <Keg 
          id={keg.id}
          name={keg.name}
          brandName={keg.brandName}
          price={keg.price}
          abv={keg.abv}
          inventory={keg.inventory}
          key={keg.id}
        />
        )}

        {props.OO_kegList.map((OO_keg, index) =>
          <Keg
            id={OO_keg.id}
            name={OO_keg.name}
            brandName={OO_keg.brandName}
            price={OO_keg.price}
            abv={OO_keg.abv}
            inventory={OO_keg.inventory}
            key={index}
          />
        )}
      <hr />
    </>
  );
}

// Add propTypes for OO_kegList
KegList.propTypes = {
  OO_kegList: PropTypes.array
};
export default KegList;