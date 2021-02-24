import React from 'react';
import AddNewKeg from './AddNewKeg';
import KegList from './KegList';
import KegDetail from './KegDetail';
import ModifyKegList from './ModifyKegList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index-actions';

class KegController extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      rdxSelectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.rdxSelectedKeg != null) {
      this.setState({
        rdxSelectedKeg: null
      });
    } else {
      const { dispatch } = this.props; 
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    const { dispatch } = this.props; 
    const action = a.toggleEdit();
    dispatch(action);
  }

  handleSellClick = () => {
    const rdxSelectedKeg = this.state.rdxSelectedKeg;
    if (rdxSelectedKeg.inventory > 0) {
      rdxSelectedKeg.inventory--;
      this.setState({
        rdxSelectedKeg: rdxSelectedKeg
      })
    }
  }

  handleAddKegToList = (rdxNewKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(rdxNewKeg);
    dispatch(action)
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangeSelection = (id) => {
    const rdxSelectedKeg = this.props.rdxKegListAll[id];
    this.setState({
      rdxSelectedKeg: rdxSelectedKeg
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({
      rdxSelectedKeg: null
    });
  }

  handleEditKeg = (rdxKegToModify) => {
    const { dispatch } = this.props;
    const action = a.addKeg(rdxKegToModify);
    dispatch(action)

    const action2 = a.toggleEdit();
    dispatch(action2);
    this.setState({
      rdxSelectedKeg: null
    });
  }

////// NOTE: this marks the end of state handlers. render method follows this point. //////
  render(){
    let currentVisibleState = null;
    let addKegBtnText = null;

    if (this.props.rdxFormIsEdit) {
      currentVisibleState = 
        <ModifyKegList
          keg = {this.state.rdxSelectedKeg}
          onUpdateKeg = {this.handleEditKeg}
        />
        addKegBtnText = 'View Kegs on Tap'
    } else if (this.state.rdxSelectedKeg !=null) {
      currentVisibleState = 
        <KegDetail 
          keg = {this.state.rdxSelectedKeg} 
          onClickingDelete = {this.handleDeletingKeg}
          onClickingEdit = {this.handleEditClick}
          onClickingSell = {this.handleSellClick}
        />
        addKegBtnText = 'View Kegs on Tap';
    } else if (this.props.rdxFormIsVisible) {
      currentVisibleState = 
        <AddNewKeg 
          onCreateNewKeg={this.handleAddKegToList} 
        />
        addKegBtnText = 'View Kegs on Tap'
    } else {
      currentVisibleState = 
        <KegList 
          kegList={this.props.rdxKegListAll} 
          onSelectKeg={this.handleChangeSelection} 
        />
        addKegBtnText = 'Add Keg to Inventory'
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
  rdxKegListAll: PropTypes.object,
  rdxFormIsVisible: PropTypes.bool,
  rdxFormIsEdit: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    rdxKegListAll: state.rdxKegListAll,
    rdxFormIsVisible: state.rdxFormIsVisible,
    rdxFormIsEdit: state.rdxFormIsEdit
  }
}

KegController = connect(mapStateToProps)(KegController);
export default KegController; 