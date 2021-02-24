import formVisibilityReducer from '../../reducers/form-visibility-reducer';

describe("formVisibilityReducer", () => {

  // start test 1 //
  test('Should return default state if no action type is recognized', () => {
    expect(
      formVisibilityReducer(
        false, {
          type: null
        }
      )
    )
    .toEqual(
      false
    );
  });

  // end test 1 // 
});