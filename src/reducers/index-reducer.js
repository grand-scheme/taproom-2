import formVisibilityReducer from './form-visibility-reducer';
import kegListReducer from './keg-list-reducer';
import formEditReducer from './form-edit-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
  {
    rdxFormVisible: formVisibilityReducer,
    rdxKegListAll: kegListReducer,
    formIsEdit: formEditReducer
  }
);

export default rootReducer;