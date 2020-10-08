import {
  fetchMealsPending,
  fetchMealCategories,
  fetchMealsError,
} from './index';

function fetchCategories() {
  return dispatch => {
    dispatch(fetchMealsPending());
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchMealCategories(res.categories));
      })
      .catch(error => {
        dispatch(fetchMealsError(error));
      });
  };
}

export default fetchCategories;