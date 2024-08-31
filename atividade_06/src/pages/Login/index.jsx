import "./styles.css";
import LogoNeflix from "../../assets/logo.png";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="main-container">
        <section className="logo-section">
          <img src={LogoNeflix} alt="" />
        </section>
        <section className="login-card">
          <div className="login-card-info">
            <div className="login-tittle">
              <h3>Entrar</h3>
            </div>
            <div className="login-inputs">
              <label className="label-input">
                <input type="text" />
                <p>Email ou número de celular</p>
              </label>
              <label className="label-input">
                <input type="password" />
                <p>Senha</p>
              </label>
              <Link to="/browse" style={{ textDecoration: "none" }}>
                <button>Entrar</button>
              </Link>

              <h2>OU</h2>
              <button>Usar código de acesso</button>
              <h2>Esqueceu a senha?</h2>
            </div>
            <div>
              <div>
                <input type="checkbox" />
                <h2>Lembre-se de mim</h2>
              </div>
              <h3>
                Novo por aqui ? <span>Assine agora</span>
              </h3>
              <p>
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô. Saiba mais.
              </p>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="footer-unset"></div>
        <div className="footer-component">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default Login;
