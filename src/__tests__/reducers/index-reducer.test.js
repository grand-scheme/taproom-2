import rootReducer from '../../reducers/index-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe(
  "rootReducer", () => {
    // start test 1

    test(
      "Should return default state if no action is taken", () => {
        expect(
          rootReducer(
            {}, {
              type: null
            }
          )
        ).toEqual(
          {
            rdxKegListAll: {},
            rdxFormVisible: false
          }
        );
      }
    );
    // end test 1
  }
)