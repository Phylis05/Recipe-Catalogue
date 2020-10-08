import {
  // fetchProductsPending,
  fetchSingleMeal,
  fetchProductsError,
} from './index';

function fetchMeal(id) {
  return dispatch => {
    // dispatch(fetchProductsPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          throw (response.error);
        }
        dispatch(fetchSingleMeal(response.meals[0]));
        return response;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchMeal;