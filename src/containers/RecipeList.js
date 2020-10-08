import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MealPreview from '../components/Recipes';
import fetchMeals from '../actions/allMeals';
import fetchMeal from '../actions/meal';
import { getMealsError, getMeals, getMealsPending } from '../constants/mealConstants';
import { updateCategory } from '../actions/index';
// import PageLoader from '../Components/Loading';

const RecipeCatalogue = props => {
  const {
    products, pending, fetchMeals, category,
  } = props;

  useEffect(() => {
    fetchMeals(category);
  }, [category, fetchMeals]);

  // const shouldComponentRender = () => {
  //   if (category === undefined || pending === true) return false;
  //   return true;
  // };

  // if (!shouldComponentRender()) { return <PageLoader />; }
  return (
    <div>
      <div className="container">
        {products.map(el => (
          <Link to={`/meal/${el.idMeal}`} key={Math.random() * 1000}>
            <MealPreview
              src={el.strMealThumb}
              name={el.strMeal}
              id={el.idMeal}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

RecipeCatalogue.defaultProps = {
  products: [''],
};

RecipeCatalogue.propTypes = {
  pending: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(String),
};

const mapStateToProps = state => {
  const { allMeals } = state;
  return (
    {
      error: getMealsError(allMeals),
      products: getMeals(allMeals),
      pending: getMealsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchMeals,
  addFilter: updateCategory,
  fetchMeal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeCatalogue);