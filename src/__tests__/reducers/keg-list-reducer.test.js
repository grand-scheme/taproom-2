import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    id: 1,
    name: "Un",
    brandName: "Wahid",
    price: 3,
    abv: 4,
    inventory: 5
  }


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



});