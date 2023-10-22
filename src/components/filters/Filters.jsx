import PropTypes from 'prop-types';
import FilterByName from './FilterByName';
import FilterByYear from './FilterByYear';

const Filters = ({
  filterValue,
  filterChange,
  selectYear,
  selectChange,
  yearsOfScenes,
}) => {
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <h2>Filter by...</h2>
      <form onSubmit={handleFormSubmit}>
        <FilterByName filterValue={filterValue} filterChange={filterChange} />
        <FilterByYear
          selectYear={selectYear}
          selectChange={selectChange}
          yearsOfScenes={yearsOfScenes}
        />
      </form>
    </>
  );
};
Filters.propTypes = {
  filterValue: PropTypes.string,
  filterChange: PropTypes.func,
  selectYear: PropTypes.string,
  selectChange: PropTypes.func,
  yearsOfScenes: PropTypes.array,
};

export default Filters;
