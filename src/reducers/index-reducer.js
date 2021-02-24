import formVisibilityReducer from './form-visibility-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
  {
    rdxFormVisible: formVisibilityReducer,
    rdxKegListAll: kegListReducer
  }
);

export default rootReducer;