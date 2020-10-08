import {
  fetchMealsError,
  fetchMealsPending,
  fetchMealsSuccess,
} from './index';

function fetchMeals(term) {
  return dispatch => {
    dispatch(fetchMealsPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchMealsSuccess(res.meals));
      })
      .catch(error => {
        dispatch(fetchMealsError(error));
      });
  };
}

export default fetchMeals;