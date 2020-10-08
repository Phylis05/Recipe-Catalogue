import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';
import fetchMeals from '../actions/allMeals';
import { getMealsPending } from '../constants/mealConstants';
import { UpdateCategory } from '../actions/index';
import RecipeCatalogue from './RecipeList';

const AllMeals = props => {
  const {
    addFilter, match, current, fetchMeals,
  } = props;

  const { category } = match.params;

  const handleFilterChange = e => {
    const newCategory = e.target.value;
    addFilter(e.target.value);
    fetchMeals(newCategory);
  };

  return (
    <div>
      <div className="d-flex">

        <span className="w-50">

          <CategoryFilter onChange={handleFilterChange} value={current} />
        </span>

        <span className="w-50 d-flex justify-c">
          <h1 className="m-20"> Current:</h1>
          <h1>
            {' '}
            {current || category}
            {' '}
          </h1>
        </span>
      </div>
      <h1 className="text-c g-text">
        {' '}
        All Recipes for
        {' '}
        <br />
        {current || category}
      </h1>
      <RecipeCatalogue category={category} />
    </div>
  );
};

AllMeals.defaultProps = {
  category: 'Beef',
};

AllMeals.propTypes = {
  category: PropTypes.string,
  addFilter: PropTypes.func.isRequired,
  fetchMeals: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = state => {
  const { allMeals } = state;
  return (
    {
      pending: getMealsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchMeals,
  addFilter: UpdateCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllMeals);