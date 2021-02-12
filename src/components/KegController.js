import React from 'react';
import AddNewKeg from './AddNewKeg';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegController extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visibleNewKegForm: false,
      OO_fullKegList: [],
      OO_selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.OO_selectedKeg != null) {
      this.setState({
        visibleNewKegForm: false,
        OO_selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        visibleNewKegForm: !prevState.visibleNewKegForm
      }));
    }
  }

  OO_handleAddingKegToList = (OO_newKeg) => {
    const OO_newFullKegList = this.state.OO_fullKegList.concat(OO_newKeg);
    this.setState({
      OO_fullKegList: OO_newFullKegList,
      visibleNewKegForm: false
    });
  }

  OO_handleChangeSelectedKeg = (id) => {
    const OO_selectedKeg = this.state.OO_fullKegList.filter(OO_keg => OO_keg.id === id)[0];
    this.setState({OO_selectedKeg: OO_selectedKeg});
  }

  render(){
    let currentVisibleState = null;
    let addKegBtnText = null;

    if (this.state.OO_selectedKeg !=null) {
      currentVisibleState = <KegDetail OO_keg = {this.state.OO_selectedKeg} />
      addKegBtnText = "View Kegs on Tap";
    } else if (this.state.visibleNewKegForm) {
      currentVisibleState = <AddNewKeg OO_onNewKegCreation={this.OO_handleAddingKegToList} />
      addKegBtnText = "View Kegs on Tap"
    } else {
      currentVisibleState = <KegList OO_kegList={this.state.OO_fullKegList} OO_onKegSelection={this.OO_handleChangeSelectedKeg} />
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