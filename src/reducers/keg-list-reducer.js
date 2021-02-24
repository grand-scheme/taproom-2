export default (state = {}, action) => {
  const { id, name, brandName, price, abv, inventory } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id] : {
          id, name, brandName, price, abv, inventory
        },
      });
    case 'DELETE_KEG':
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};