/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import '../styles/App.scss';
import callToApi from '../services/callToApi';
import Header from './common/Header';
import Footer from './common/Footer';
import Landing from './Landing';
import Filters from './filters/Filters';
import MovieSceneList from './movies/MovieSceneList';
import MovieSceneDetails from './movies/MovieSceneDetail';
import NotFoundPage from './NotFoundPage';

function App() {
  //states
  const [filmList, setFilmList] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [selectYear, setSelectYear] = useState('');

  //effects
  useEffect(() => {
    callToApi().then((response) => {
      const filmWithIds = response.map((film) => ({
        ...film,
        id: uuidv4(),
      }));
      setFilmList(filmWithIds);
    });
  }, []);

  //handlers from events
  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  const handleSelectYear = (value) => {
    setSelectYear(value);
  };

  //renders & other functions
  const filteredFilmList = filmList
    .filter((eachFilm) =>
      eachFilm.movie.toLowerCase().includes(filterValue.toLowerCase())
    )
    .filter((eachFilm) => {
      if (selectYear === '') {
        return true;
      } else {
        return selectYear === String(eachFilm.year);
      }
    });

  const yearsOfScenes = filmList.map((film) => film.year);

  const { pathname } = useLocation();
  const routeData = matchPath('/movies/:id', pathname);
  const movieId = routeData !== null ? routeData.params.id : '';

  const movieData = filmList.find((film) => film.id === movieId);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/movies"
            element={
              <>
                <Filters
                  filterValue={filterValue}
                  filterChange={handleFilterChange}
                  selectYear={selectYear}
                  selectChange={handleSelectYear}
                  yearsOfScenes={yearsOfScenes}
                />
                <MovieSceneList filmList={filteredFilmList} />
                <Link to="/">Back to Home Page</Link>
              </>
            }
          />
          <Route
            path="/movies/:id"
            element={
              <>
                <MovieSceneDetails film={movieData} />
                <Link to="/movies">Back to movies list</Link>
              </>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
