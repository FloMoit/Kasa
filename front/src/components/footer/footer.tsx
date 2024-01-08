import "./footer.scss";
import Logo from "../../assets/logo-white.png";

function Footer() {
  return (
    <footer className="footer">
      <img
        src={Logo}
        alt="Logo de la société Kasa"
        className="img footer__logo"
      />

      <h2 className="footer__h2 white">© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

export default Footer;
