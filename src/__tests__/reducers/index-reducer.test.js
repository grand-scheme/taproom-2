import rootReducer from '../../reducers/index-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import formVisibilityReducer from '../../reducers/form-visibility-reducer';
import formEditReducer from '../../reducers/form-edit-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import { createStore } from 'redux';
import * as c from '../../actions/action-types';

let store = createStore(rootReducer);

describe('rootReducer', () => {
    
    // start test 1
test('Should return default state if no action is taken', () => {
    expect(rootReducer({}, { type: null }))
    .toEqual({
      rdxKegListAll: {},
      rdxFormIsVisible: false,
      rdxFormIsEdit: false,
      rdxSelectedKeg: null
    });
  })
    // end test 1 
    
    // start test 2
test('Check that initial state of rdxKegListAll matches root', () => {
    expect(store.getState().rdxKegListAll)
      .toEqual(kegListReducer(undefined, { type: null }));
  })
    // end test 2 
      
    // start test 3
test('Check that initial state of rdxFormIsVisible matches root', () => {
    expect(store.getState().rdxFormIsVisible)
      .toEqual(formVisibilityReducer( undefined, { type: null } ));
  })
    // end test 3 
    
    // start test 4
test('Check that ADD_KEG action still works', () => {
    const action = {
      type: c.ADD_KEG, 
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
test('Check that TOGGLE_FORM still works', () => {
    const action = { type: c.TOGGLE_FORM }
    store.dispatch(action);
    expect(store.getState().rdxFormIsVisible)
      .toEqual(formVisibilityReducer(undefined, action ));
  })
    // end test 5

    // start test 6
    test('Check that initial state of rdxFormIsEdit matches root', () => {
      expect(store.getState().rdxFormIsEdit)
        .toEqual(formEditReducer( undefined, { type: null } ));
    })
    // end test 6

    // start test 7
    test('Check that TOGGLE_EDIT still works', () => {
      const action = { type: c.TOGGLE_EDIT }
      store.dispatch(action);
      expect(store.getState().rdxFormIsEdit)
        .toEqual(formEditReducer(undefined, action ));
    })
    // end test 7

    //start test 8
    test(
      'Check that initial state of rdxSelectedKeg matches root', () => {
        expect(store.getState().rdxSelectedKeg)
        .toEqual(
          selectedKegReducer(undefined, {type:null}))})
      // end test 8


    // end test suite  
});
