/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import '../styles/App.scss';
import callToApi from '../services/callToApi';
import localStorage from '../services/localStorage';
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
    // Load film list from localStorage or API
    const storedFilmList = localStorage.get('filmList');
    if (storedFilmList) {
      setFilmList(storedFilmList);
    } else {
      callToApi().then((response) => {
        const filmsWithIds = response.map((film) => ({
          ...film,
          id: uuidv4(),
        }));
        setFilmList(filmsWithIds);
        // Save film list to localStorage
        localStorage.set('filmList', filmsWithIds);
      });
    }
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
      <main className="main">
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
                <Link className="links" to="/">
                  <p className="link-back-list">Back to Home Page </p>
                </Link>
              </>
            }
          />
          <Route
            path="/movies/:id"
            element={
              <>
                <MovieSceneDetails film={movieData} />
                <Link className="links" to="/movies">
                  <p className="link-back-home">Back to movies list</p>
                </Link>
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
