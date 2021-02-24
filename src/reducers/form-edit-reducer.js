import * as c from '../actions/action-types';

export default (state = false, action) => {
  switch (action.type) {
    case c.TOGGLE_EDIT:
      return !state;
    default:
      return state;
  }
};