import * as c from '../actions/action-types';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT
});

export const addKeg = (keg) => {
  const { id, name, brandName, price, abv, inventory } = keg;
  return {
    type: c.ADD_KEG,
    id, name, brandName, price, abv, inventory
  }
};

export const selectKeg = id => ({
  type: c.SELECT_KEG,
  id
});

export const rejectKeg = () => ({
  type: c.REJECT_KEG
});