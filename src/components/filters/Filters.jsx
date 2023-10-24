import PropTypes from 'prop-types';
import '../../styles/layout/Filters.scss';
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
      <h2 className="filter_sec-title ">Filter by...</h2>
      <form
        id="filters-section"
        className="filter_sec-form"
        onSubmit={handleFormSubmit}
      >
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
