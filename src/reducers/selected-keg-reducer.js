export default (state = undefined, action) => {
  switch (action.type) {
    case 'SELECTED_KEG':
      return action.selectedKeg;
    default: 
    return state;
  }

}