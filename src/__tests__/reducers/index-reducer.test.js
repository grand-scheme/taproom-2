import rootReducer from '../../reducers/index-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import formVisibilityReducer from '../../reducers/form-visibility-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {
    
    // start test 1
test("Should return default state if no action is taken", () => {
    expect(rootReducer({}, { type: null }))
    .toEqual({
      rdxKegListAll: {},
      rdxFormVisible: false
    });
  })
    // end test 1 
    
    // start test 2
test("Check that initial state of rdxKegListAll matches root", () => {
    expect(store.getState().rdxKegListAll)
      .toEqual(kegListReducer(undefined, { type: null }));
  })
    // end test 2 
      
    // start test 3
test("Check that initial state of rdxFormVisible matches root", () => {
    expect(store.getState().rdxFormVisible)
      .toEqual(formVisibilityReducer( undefined, { type: null } ));
  })
    // end test 3 
    
    // start test 4
test("Check that ADD_KEG action still works", () => {
    const action = {
      type: 'ADD_KEG', 
      id: 3,
      name: 'Trois',
      brandName: 'Thalatha',
      price: 3,
      abv: 3,
      inventory: 3
    }
    store.dispatch(action);
    expect(store.getState().rdxKegListAll)
      .toEqual(kegListReducer( undefined, action ));
  })
    // end test 4 
    
    // start test 5
test("Check that TOGGLE_FORM still works", () => {
    const action = { type: "TOGGLE_FORM" }
    store.dispatch(action);
    expect(store.getState().rdxFormVisible)
      .toEqual(formVisibilityReducer(undefined, action ));
  })
    // end test 5

    // end test suite  
});