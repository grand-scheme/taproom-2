import React from 'react';
import Keg from './Keg';
import {kegsList} from '../data/kegs'

function KegList(){
  return(
    <>
      {kegsList.map((keg, index) =>
      <Keg 
          kegId={keg.kegId}
          name={keg.name}
          brandName={keg.brandName}
          price={keg.price}
          abv={keg.abv}
          inventory={keg.inventory}
          key={index}
        />
        )}
      <hr />
    </>
  );
}

export default KegList;