import PropTypes from 'prop-types';
import FilterByName from './FilterByName';
import FilterByYear from './FilterByYear';

const Filters = ({
  filterValue,
  filterChange,
  selectYear,
  yearRange,
  selectChange,
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
          yearRange={yearRange}
          selectChange={selectChange}
        />
      </form>
    </>
  );
};
Filters.propTypes = {
  filterValue: PropTypes.string,
  filterChange: PropTypes.func,
  selectYear: PropTypes.string,
  yearRange: PropTypes.array,
  selectChange: PropTypes.func,
};

export default Filters;
