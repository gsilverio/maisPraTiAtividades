import "./styles.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <div className="footer-info-1">
          <div className="info">
            <h3>
              Dúvidas? Ligue {""}
              <a className="info-tel" href="#">
                0800 591 2876
              </a>
            </h3>
          </div>
        </div>
        <div className="footer-info-2">
          <div className="info">
            <h4>
              <a href="#">Perguntas frequentes</a>
            </h4>
            <h4>
              <a href="#">Preferências de cookies</a>
            </h4>
          </div>
          <div className="info">
            <h4>
              <a href="#">Central de Ajuda</a>
            </h4>
            <h4>
              <a href="#">Informações corporativas</a>
            </h4>
          </div>
          <div className="info">
            <h4>
              <a href="#">Termos de uso</a>
            </h4>
          </div>
          <div className="info">
            <h4>
              <a href="#">Privacidade</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
