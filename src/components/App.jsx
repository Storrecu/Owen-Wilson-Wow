//imports
import { useEffect, useState } from 'react';

//styles
import '../styles/App.scss';

//services
import callToApi from '../services/callToApi';

//components
import MovieSceneList from './MovieSceneList';

// import ls from '../services/localStorage';
// import { Link, Route, Routes } from "react-router-dom";
//import { useLocation, matchPath } from "react-router";
//import { useParams } from "react-router-dom";

function App() {
  //states
  const [filmList, setFilmList] = useState([]);
  //effects
  useEffect(() => {
    callToApi().then((response) => {
      setFilmList(response);
    });
  }, []);
  //handlers from events

  //renders
  const renderFilmList = () => {
    return filmList.map((eachFilm, i) => (
      <li key={i}>
        <img src={eachFilm.poster} alt="Each movie poster" />
        <h2>{eachFilm.movie}</h2>
        <p>{eachFilm.phrase}</p>
        <p>{eachFilm.year}</p>
      </li>
    ));
  };

  return (
    <>
      <header>
        <h1>Owen Wilson's "wow"</h1>
      </header>
      <main>
        <MovieSceneList filmList={filmList} />
      </main>
      <footer>
        <p>Silvia Torres for Adalab 2023</p>
      </footer>
    </>
  );
}

export default App;
