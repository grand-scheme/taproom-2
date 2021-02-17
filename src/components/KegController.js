import React from 'react';
import AddNewKeg from './AddNewKeg';
import KegList from './KegList';
import KegDetail from './KegDetail';
import ModifyKegList from './ModifyKegList';
import {kegInventory} from '../data/kegs'

class KegController extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visibleNewKegForm: false,
      visibleEditKegForm: false,
      kegListAll: kegInventory,
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        visibleEditKegForm: false,
        visibleNewKegForm: false,
        selectedKeg: null
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

  handleSellClick = () => {
    if (this.state.selectedKeg.inventory > 0) {
      this.state.selectedKeg.inventory--;
    }
    this.setState({
    });
  }

  handleAddKegToList = (newKeg) => {
    const newKegListAll = this.state.kegListAll.concat(newKeg);
    this.setState({
      kegListAll: newKegListAll,
      visibleNewKegForm: false
    });
  }

  handleChangeSelection = (id) => {
    const selectedKeg = this.state.kegListAll.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg
    });
  }

  handleDeletingKeg = (id) => {
    const newKegListAll = this.state.kegListAll.filter(keg => keg.id !== id);
    this.setState({
      kegListAll: newKegListAll,
      selectedKeg: null
    });
  }

  handleEditKeg = (kegToModify) => {
    const modifiedKegList = this.state.kegListAll
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToModify);
    this.setState({
      kegListAll: modifiedKegList,
      visibleEditKegForm: false,
      selectedKeg: null
    });
  }




///////////////////////////////////////
  render(){
    let currentVisibleState = null;
    let addKegBtnText = null;

    if (this.state.visibleEditKegForm) {
      currentVisibleState = <ModifyKegList
        keg = {this.state.selectedKeg}
        onUpdateKeg = {this.handleEditKeg}
        />
        addKegBtnText = "View Kegs on Tap"
    } else if (this.state.selectedKeg !=null) {
      currentVisibleState = 
      <KegDetail 
        keg = {this.state.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick}
        onClickingSell = {this.handleSellClick}
      />
      addKegBtnText = "View Kegs on Tap";
    } else if (this.state.visibleNewKegForm) {
      currentVisibleState = <AddNewKeg onCreateNewKeg={this.handleAddKegToList} />
      addKegBtnText = "View Kegs on Tap"
    } else {
      currentVisibleState = <KegList kegList={this.state.kegListAll} onSelectKeg={this.handleChangeSelection} />
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