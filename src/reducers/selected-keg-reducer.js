export default (state = null, action) => {
  const { selectedKeg } = action;
  switch (action.type) {
    case 'SELECT_KEG':
      return selectedKeg;
    case 'REJECT_KEG':
      return null;
    default: 
    return state;
  }

}