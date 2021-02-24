import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  let action;
  const kegData = { // for test 2
    id: 5,
    name: 'Cinq',
    brandName: 'Khamza',
    price: 5,
    abv: 5,
    inventory: 5
  }

  // end DESCRIBES

  // start test 1
  test('Should return default state if no actions are taken', () => {
    expect(selectedKegReducer({}, {type: null}))
    .toEqual({});
  });
  // end test 1

  // test 2
  test('Should return the keg specified when specified', () => {
    action = { type: 'SELECT_KEG',
      selectedKeg: kegData };
      expect(selectedKegReducer(null, action))
      .toEqual(kegData);
    }
  )
})