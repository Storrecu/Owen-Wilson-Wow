import '../../styles/layout/Footer.scss';
import logo from '../../images/logo-adalab.png';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="footer_text"> Silvia Torres for Adalab 2023</p>
        <img className="footer_logo" src={logo} alt="Adalab logo" />
      </div>
    </>
  );
};

export default Footer;
