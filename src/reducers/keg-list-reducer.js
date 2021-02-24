export default (state = {}, action) => {
  const { id, name, brandName, price, abv, inventory } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id] : {
          id, name, brandName, price, abv, inventory
        }
      });
    default:
      return state;
  }
};