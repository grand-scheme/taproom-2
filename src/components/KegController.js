import React from 'react';
import AddNewKeg from './AddNewKeg';
import KegList from './KegList';

class KegController extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visibleNewKegForm: false
    };
  }
  render(){
    let currentVisibleState = null;
    if (this.state.visibleNewKegForm) {
      currentVisibleState = <AddNewKeg />
    } else {
      currentVisibleState = <KegList />
    }
    return(
      <>
        <h1>KegController placeholder</h1>
        {currentVisibleState}
      </>
    );
  }
}

export default KegController;