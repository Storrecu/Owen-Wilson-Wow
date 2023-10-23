import { Link } from 'react-router-dom';
import '../styles/layout/Landing.scss';
import pureWow from '../images/owen-wow.jpeg';
import wowLogo from '../images/wow-logo.png';

const Landing = () => {
  return (
    <div className="landing">
      <img
        className="landing_img-one"
        src={pureWow}
        alt="Deep think of Owen Wilson"
      />
      <div className="section">
        <img
          className="section_img"
          src={wowLogo}
          alt="Owen Wilson official API logo"
        />
        <Link className="section_link" to="/movies">
          Go to wow scenes
        </Link>
      </div>
    </div>
  );
};

export default Landing;
