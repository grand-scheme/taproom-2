import formVisibilityReducer from './form-visibility-reducer';
import formEditReducer from './form-edit-reducer';
import kegListReducer from './keg-list-reducer';
import formEditReducer from './form-edit-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
  {
    rdxFormIsVisible: formVisibilityReducer,
    rdxKegListAll: kegListReducer,
    rdxFormIsEdit: formEditReducer
  }
);

export default rootReducer;