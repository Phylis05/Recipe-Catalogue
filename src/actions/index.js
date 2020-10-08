const fetchMealsPending = () => ({
  type: 'FETCH_MEALS_PENDING',
});

const fetchMealsSuccess = products => ({
  type: 'FETCH_mEALS_SUCCESS',
  products,
});

const fetchMealsError = error => ({
  type: 'FETCH_MEALS_ERROR',
  error,
});
const UpdateCategory = category => ({
  type: 'UPDATE_CATEGORY',
  category,
});

const fetchMeal = details => ({
  type: 'FETCH_MEAL_SUCCESS',
  details,
});

const fetchMealCategories = categories => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  categories,
});

const resetSelected = () => ({ type: 'RESET' });

export {
  fetchMealsError,
  fetchMealsPending,
  fetchMealsSuccess,
  UpdateCategory,
  fetchMeal,
  resetSelected,
  fetchMealCategories,
};