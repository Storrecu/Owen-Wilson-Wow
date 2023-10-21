import PropTypes from 'prop-types';

const FilterByYear = ({ selectYear, selectChange, yearRange }) => {
  const handleSelect = (ev) => {
    const selectedYear = ev.target.value;
    selectChange(selectedYear === 'All years' ? '' : selectedYear);
  };

  return (
    <>
      <label htmlFor="">
        Search by year
        <select
          className="form__input-text"
          name="selectYear"
          id="selectYear"
          value={selectYear}
          onChange={handleSelect}
        >
          <option value="">All years</option>
          {yearRange.map((year, i) => (
            <option key={i} value={String(year)}>
              {year}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};
FilterByYear.propTypes = {
  selectYear: PropTypes.string,
  selectChange: PropTypes.func,
  yearRange: PropTypes.array,
};

export default FilterByYear;
