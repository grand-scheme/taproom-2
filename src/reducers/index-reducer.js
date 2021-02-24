import formVisibilityReducer from './form-visibility-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
  {
    rdxFormIsVisible: formVisibilityReducer,
    rdxKegListAll: kegListReducer
  }
);

export default rootReducer;