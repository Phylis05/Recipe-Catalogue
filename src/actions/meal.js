import {
  fetchMealsPending,
  fetchMeal,
  fetchMealsError,
} from './index';

function singleMeal(id) {
  return dispatch => {
    dispatch(fetchMealsPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchMeal(res.meals[0]));
        return res;
      })
      .catch(error => {
        dispatch(fetchMealsError(error));
      });
  };
}

export default singleMeal;