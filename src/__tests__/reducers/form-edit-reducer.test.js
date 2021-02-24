import * as c from '../../actions/action-types';
import formEditReducer from '../../reducers/form-edit-reducer';

describe("formEditReducer", () => {

  // start test 1 //
test('Should return default state if no action type is recognized', () => {
    expect(formEditReducer(undefined, { type: null } ))
    .toEqual(false);
  });
  // end test 1 

  // begin test 2
test("Should toggle form from new to edit (from false to true)", () => {
    expect(formEditReducer(false, { type: c.TOGGLE_EDIT }))
    .toEqual(true);
  });
  // end test 2

  // end test suite
});
