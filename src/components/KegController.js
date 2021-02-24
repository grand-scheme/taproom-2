import React from 'react';
import AddNewKeg from './AddNewKeg';
import KegList from './KegList';
import KegDetail from './KegDetail';
import ModifyKegList from './ModifyKegList';
import {kegInventory} from '../data/kegs';
import { connect } from 'react-redux';

class KegController extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visibleNewKegForm: false,
      visibleEditKegForm: false,
      kegListAll: kegInventory, // NOTE: going to need to add kegInventory to redux's handling of inventory
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
    const selectedKeg = this.state.selectedKeg;
    if (selectedKeg.inventory > 0) {
      selectedKeg.inventory--;
      this.setState({
        selectedKeg: selectedKeg
      })
    }
  }

  handleAddKegToList = (rdxNewKeg) => {
    const { dispatch } = this.props;
    const { id, name, brandName, price, abv, inventory } = rdxNewKeg;
    const action = {
      type: 'ADD_KEG',
      id, name, brandName, price, abv, inventory
    }
    dispatch(action)

    this.setState({
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
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id
    }
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  handleEditKeg = (rdxKegToModify) => {
    const { dispatch } = this.props;
    const { id, name, brandName, price, abv, inventory } = rdxKegToModify;
    const action = {
      type: 'ADD_KEG',
      id, name, brandName, price, abv, inventory
    }
    dispatch(action)
    this.setState({
      visibleEditKegForm: false,
      selectedKeg: null
    });
  }

////// NOTE: this marks the end of state handlers. render method follows this point. //////
  render(){
    let currentVisibleState = null;
    let addKegBtnText = null;

    if (this.state.visibleEditKegForm) {
      currentVisibleState = 
        <ModifyKegList
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
      currentVisibleState = 
        <AddNewKeg 
          onCreateNewKeg={this.handleAddKegToList} 
        />
        addKegBtnText = "View Kegs on Tap"
    } else {
      currentVisibleState = 
        <KegList 
          kegList={this.state.kegListAll} 
          onSelectKeg={this.handleChangeSelection} 
        />
        addKegBtnText = "Add Keg to Inventory"
    }
    
    return(
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}> 
          {addKegBtnText} 
        </button>
      </>
    );
  }
}

KegController = connect()(KegController);
export default KegController; 