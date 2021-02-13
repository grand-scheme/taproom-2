import React from 'react';
import AddNewKeg from './AddNewKeg';
import KegList from './KegList';
import KegDetail from './KegDetail';
import ModifyKegList from './ModifyKegList';
import {kegsList} from '../data/kegs'

class KegController extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visibleNewKegForm: false,
      visibleEditKegForm: false,
      OO_fullKegList: kegsList,
      OO_selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.OO_selectedKeg != null) {
      this.setState({
        visibleEditKegForm: false,
        visibleNewKegForm: false,
        OO_selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        visibleNewKegForm: !prevState.visibleNewKegForm
      }));
    }
  }

  handleEditClick = () => {
    this.setState({visibleEditKegForm: true});
  }

  OO_handleAddingKegToList = (OO_newKeg) => {
    const OO_newFullKegList = this.state.OO_fullKegList.concat(OO_newKeg);
    this.setState({
      OO_fullKegList: OO_newFullKegList,
      visibleNewKegForm: false
    });
  }

  OO_handleChangeSelectedKeg = (id) => {
    const OO_selectedKeg = this.state.OO_fullKegList.filter(keg => keg.id === id)[0];
    this.setState({
      OO_selectedKeg: OO_selectedKeg
    });
  }

  handleDeletingKeg = (id) => {
    const OO_newFullKegList = this.state.OO_fullKegList.filter(keg => keg.id !== id);
    this.setState({
      OO_fullKegList: OO_newFullKegList,
      OO_selectedKeg: null
    });
  }

  handleEditKeg = (kegToModify) => {
    const modifiedKegList = this.state.OO_fullKegList
      .filter(keg => keg.id !== this.state.OO_selectedKeg.id)
      .concat(kegToModify);
    this.setState({
      OO_fullKegList: modifiedKegList,
      visibleEditKegForm: false,
      OO_selectedKeg: null
    });
  }




///////////////////////////////////////
  render(){
    let currentVisibleState = null;
    let addKegBtnText = null;

    if (this.state.visibleEditKegForm) {
      currentVisibleState = <ModifyKegList
        keg = {this.state.OO_selectedKeg}
        onUpdateKeg = {this.handleEditKeg}
        />
        addKegBtnText = "View Kegs on Tap"
    } else if (this.state.OO_selectedKeg !=null) {
      currentVisibleState = 
      <KegDetail 
        keg = {this.state.OO_selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick}
      />
      addKegBtnText = "View Kegs on Tap";
    } else if (this.state.visibleNewKegForm) {
      currentVisibleState = <AddNewKeg onCreateNewKeg={this.OO_handleAddingKegToList} />
      addKegBtnText = "View Kegs on Tap"
    } else {
      currentVisibleState = <KegList OO_kegList={this.state.OO_fullKegList} onSelectKeg={this.OO_handleChangeSelectedKeg} />
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