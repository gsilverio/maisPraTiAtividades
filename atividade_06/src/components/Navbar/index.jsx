import "./styles.css";
import logoNetflix from "../../assets/logo.png";
function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-menu">
          <div className="navbar-logo">
            <img src={logoNetflix} alt="" />
          </div>
          <div className="navbar-menu-items">
            <ul>
              <li>
                <h4>Inicio</h4>
              </li>
              <li>
                <h4>Séries</h4>
              </li>
              <li>
                <h4>Filmes</h4>
              </li>
              <li>
                <h4>Bombando</h4>
              </li>
              <li>
                <h4>Minha lista</h4>
              </li>
              <li>
                <h4>Navegar por idiomas</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
