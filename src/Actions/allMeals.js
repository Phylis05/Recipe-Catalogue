import {
  fetchProductsSuccess,
  fetchProductsError,
} from './index';

function fetchAllMeals(type) {
  return dispatch => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          throw (response.error);
        }
        dispatch(fetchProductsSuccess(response.meals));
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchAllMeals;