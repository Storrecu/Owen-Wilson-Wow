/* eslint-disable react/no-unescaped-entities */
//imports
import { useEffect, useState } from 'react';

//styles
import '../styles/App.scss';

//services
import callToApi from '../services/callToApi';

//components
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

  //effects
  useEffect(() => {
    callToApi().then((response) => {
      setFilmList(response);
    });
  }, []);

  // handlers from events
  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  // renders
  const filteredFilmList = filmList.filter((eachFilm) =>
    eachFilm.movie.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <header>
        <h1>Owen Wilson's "wow"</h1>
      </header>
      <main>
        <Filters filterValue={filterValue} filterChange={handleFilterChange} />
        <MovieSceneList filmList={filteredFilmList} />
      </main>
      <footer>
        <p>Silvia Torres for Adalab 2023</p>
      </footer>
    </>
  );
}

export default App;
