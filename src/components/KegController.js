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

  handleClick = () => {
    this.setState(prevState => ({
      visibleNewKegForm: !prevState.visibleNewKegForm
    }));
  }

  render(){
    let currentVisibleState = null;
    let addKegBtnText = null;
    if (this.state.visibleNewKegForm) {
      currentVisibleState = <AddNewKeg />
      addKegBtnText = "View Kegs on Tap"
    } else {
      currentVisibleState = <KegList />
      addKegBtnText = "Add Keg to Inventory"
        }
    return(
      <>
        <h1>KegController placeholder</h1>
        {currentVisibleState}
        <button onClick={this.handleClick}> 
          {addKegBtnText} 
        </button>
      </>
    );
  }
}

export default KegController;