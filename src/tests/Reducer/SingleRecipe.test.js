import singleRecipeReducer from '../../Reducers/SingleRecipe';

const initialState = {
  pending: false,
  details: {},
  error: undefined,
};

describe('update category', () => {
  it('should show a single recipe', () => {
    expect(singleRecipeReducer(initialState, { type: 'FETCH_MEAL_SUCCESS', details: { a: 'e', b: 'bee' } })).toEqual({ ...initialState, details: { a: 'e', b: 'bee' } });
  });
});