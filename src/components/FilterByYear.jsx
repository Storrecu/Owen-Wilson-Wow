import PropTypes from 'prop-types';

const FilterByYear = ({ selectYear, yearRange, selectChange }) => {
  const handleSelect = (ev) => {
    selectChange(ev.target.value);
  };

  const yearList = yearRange.map((year, i) => {
    return (
      <option key={i} value={year}>
        {year}
      </option>
    );
  });

  return (
    <>
      <label htmlFor="">
        Search by year
        <select
          className="form__input-text"
          name="search_year"
          id="search_year"
          value={selectYear}
          onChange={handleSelect}
        >
          <option value="">All years</option>
          {yearList}
          {/* <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option> */}
        </select>
      </label>
    </>
  );
};
FilterByYear.propTypes = {
  selectYear: PropTypes.string,
  yearRange: PropTypes.array,
  selectChange: PropTypes.func,
};

export default FilterByYear;
