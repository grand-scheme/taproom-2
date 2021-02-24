import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  test('Should return default state if no actions are taken', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });
});