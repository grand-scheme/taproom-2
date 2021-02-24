export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const toggleEdit = () => ({
  type: 'TOGGLE_EDIT'
});

export const addKeg = (keg) => {
  const { id, name, brandName, price, abv, inventory } = keg;
  return {
    type: 'ADD_KEG',
    id, name, brandName, price, abv, inventory
  }
}