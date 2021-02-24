import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {


  // end DESCRIBES

  // start test 1
  test('Should return default state if no actions are taken', () => {
    expect(selectedKegReducer({}, {type: null}))
    .toEqual({});
  });
  // end test 1
})