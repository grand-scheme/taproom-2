import * as c from '../actions/action-types';

export default (state = null, action) => {
  const { selectedKeg } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      return selectedKeg;
    case c.REJECT_KEG:
      return null;
    default: 
    return state;
  }

}