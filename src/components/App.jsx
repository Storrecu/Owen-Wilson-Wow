/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react';
import '../styles/App.scss';
import callToApi from '../services/callToApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

// import ls from '../services/localStorage';
// import { Link, Route, Routes } from "react-router-dom";
//import { useLocation, matchPath } from "react-router";
//import { useParams } from "react-router-dom";

function App() {
  //states
  const [filmList, setFilmList] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [yearRange, setYearRange] = useState([]);
  const [selectYear, setSelectYear] = useState('');

  //effects
  useEffect(() => {
    callToApi().then((response) => {
      setFilmList(response);
      calculateYearRange(response);
    });
  }, []);

  // handlers from events
  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  const handleSelectYear = (value) => {
    setSelectYear(value);
  };

  // renders & other functions
  const calculateYearRange = (filmList) => {
    let allYears = [];
    const years = filmList.map((film) => film.year);
    console.log('years > ', years.sort());
    const minYear = Math.min(...years);
    console.log('minYear > ', minYear);
    const maxYear = Math.max(...years);
    console.log('maxYear > ', maxYear);

    for (let index = minYear; index <= maxYear; index++) {
      allYears.push(index);
    }
    setYearRange(allYears);
    console.log(yearRange);
  };

  const filteredFilmList = filmList.filter((eachFilm) =>
    eachFilm.movie.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <header>
        <h1>Owen Wilson's "wow"</h1>
      </header>
      <main>
        <Filters
          filterValue={filterValue}
          filterChange={handleFilterChange}
          selectYear={selectYear}
          yearRange={yearRange}
          selectChange={handleSelectYear}
        />
        <MovieSceneList filmList={filteredFilmList} />
      </main>
      <footer>
        <p>Silvia Torres for Adalab 2023</p>
      </footer>
    </>
  );
}

export default App;
