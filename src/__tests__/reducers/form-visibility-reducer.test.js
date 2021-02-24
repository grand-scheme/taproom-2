import * as c from '../../actions/action-types';
import formVisibilityReducer from '../../reducers/form-visibility-reducer';

describe("formVisibilityReducer", () => {

  // start test 1 //
test('Should return default state if no action type is recognized', () => {
    expect(formVisibilityReducer(undefined, { type: null } ))
    .toEqual(false);
  });
  // end test 1 

  // begin test 2
test("Should toggle form visibility from false to true", () => {
    expect(formVisibilityReducer(false, { type: c.TOGGLE_FORM }))
    .toEqual(true);
  });
  // end test 2

  // end test suite
});