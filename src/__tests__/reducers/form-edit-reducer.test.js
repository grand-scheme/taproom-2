import formEditReducer from '../../reducers/form-edit-reducer';

describe(
  "formEditReducer", () => {
    // start test 1
    test(
      "Should return default if no action is taken",  () => {
        expect(
          formEditReducer(
            false, {type: null}
          )
        ).toEqual(
          false
        );
      }
    )
    // end test 1 // start test 2
    test(
      "Should toggle new/edit form (from false to true)", () => {
        expect(
          formEditReducer(false, { type: "TOGGLE_EDIT" })
        ).toEqual(true)
      }
    )
    // end test 2
  }
)