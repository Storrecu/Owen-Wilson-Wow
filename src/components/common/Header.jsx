/* eslint-disable react/no-unescaped-entities */
import '../../styles/layout/Header.scss';

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="header_title">
          Owen Wilson's "wow"{' '}
          <i className="fa-solid fa-film header_title-icon"></i>
        </h1>
      </div>
    </>
  );
};

export default Header;
