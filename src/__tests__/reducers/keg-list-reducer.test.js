import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  const kegData = { // for test 2
    id: 0,
    name: "Zéro",
    brandName: "Sifr",
    price: 0,
    abv: 0,
    inventory: 0
  }
  const testState = { // for test 3
    1: {
      id: 1,
      name: "Un",
      brandName: "Wahid",
      price: 1,
      abv: 1,
      inventory: 1
    },
    2: {
      id: 2,
      name: "Deux",
      brandName: "Ithnan",
      price: 2,
      abv: 2,
      inventory: 2
    }
  }

  // end DESCRIBES
  // start test 1
  test('Should return default state if no actions are taken', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });
// end test 1 // start test 2
  test('Should add new keg to list', () => {
    const {id, name, brandName, price, abv, inventory} = kegData;
    action = {
      type: 'ADD_KEG',
      id, name, brandName, price, abv, inventory
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        id, name, brandName, price, abv, inventory
      }
    });
  });
  // end test 2 // start test 3
  test('Should delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(testState, action)).toEqual({
      2: {
        id: 2,
        name: "Deux",
        brandName: "Ithnan",
        price: 2,
        abv: 2,
        inventory: 2
      }
    });
  });

  // end test 3 //



});