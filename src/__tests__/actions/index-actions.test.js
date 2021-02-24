import * as actions from '../../actions/index-actions';

describe('keg management action', () => {

  // test 1
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1))
    .toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });
  // end test 1

  // start test 2
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm())
    .toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  // end test 2

  // start test 3
  it('toggleEdit should create TOGGLE_EDIT action', () => {
    expect(actions.toggleEdit())
    .toEqual({
      type: 'TOGGLE_EDIT'
    });
  });
  // end test 3
});