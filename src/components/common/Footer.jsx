import '../../styles/layout/Footer.scss';
import logo from '../../images/adalab-logo.png';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="footer_text"> Silvia Torres</p>
        <img className="footer_logo" src={logo} alt="Adalab logo" />
      </div>
    </>
  );
};

export default Footer;
