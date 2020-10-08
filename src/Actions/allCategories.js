import {
  fetchCategories,
  fetchProductsError,
} from './index';

function fetchAllCategories() {
  return dispatch => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          throw (response.error);
        }
        dispatch(fetchCategories(response.categories));
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchAllCategories;