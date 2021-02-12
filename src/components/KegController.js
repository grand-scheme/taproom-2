import React from 'react';
import AddNewKeg from './AddNewKeg';
import KegList from './KegList';

class KegController extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visibleNewKegForm: false,
      OO_fullKegList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      visibleNewKegForm: !prevState.visibleNewKegForm
    }));
  }

  OO_handleAddingKegToList = (OO_newKeg) => {
    const OO_newFullKegList = this.state.OO_fullKegList.concat(OO_newKeg);
    this.setState({
      OO_fullKegList: OO_newFullKegList,
      visibleNewKegForm: false
    });
  }

  render(){
    let currentVisibleState = null;
    let addKegBtnText = null;
    if (this.state.visibleNewKegForm) {
      currentVisibleState = <AddNewKeg OO_onNewKegCreation={this.OO_handleAddingKegToList} />
      addKegBtnText = "View Kegs on Tap"
    } else {
      currentVisibleState = 
      <KegList 
        OO_kegList={this.state.OO_fullKegList} 
      />
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