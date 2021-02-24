import React from 'react';
import AddNewKeg from './AddNewKeg';
import KegList from './KegList';
import KegDetail from './KegDetail';
import ModifyKegList from './ModifyKegList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegController extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      rdxFormIsVisible: false,
      rdxFormIsEdit: false,
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        rdxFormIsEdit: false,
        rdxFormIsVisible: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        rdxFormIsVisible: !prevState.rdxFormIsVisible
      }));
    }
  }

  handleEditClick = () => {
    this.setState({rdxFormIsEdit: true});
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
      rdxFormIsVisible: false
    });
  }

  handleChangeSelection = (id) => {
    const selectedKeg = this.props.rdxKegListAll[id];
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
      rdxFormIsEdit: false,
      selectedKeg: null
    });
  }

////// NOTE: this marks the end of state handlers. render method follows this point. //////
  render(){
    let currentVisibleState = null;
    let addKegBtnText = null;

    if (this.state.rdxFormIsEdit) {
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
    } else if (this.state.rdxFormIsVisible) {
      currentVisibleState = 
        <AddNewKeg 
          onCreateNewKeg={this.handleAddKegToList} 
        />
        addKegBtnText = "View Kegs on Tap"
    } else {
      currentVisibleState = 
        <KegList 
          kegList={this.props.rdxKegListAll} 
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


KegController.propTypes = {
  rdxKegListAll: PropTypes.object
};

const mapStateToProps = state => {
  return {
    rdxKegListAll: state.rdxKegListAll,
    
  }
}

KegController = connect(mapStateToProps)(KegController);
export default KegController; 