import { Link } from "react-router-dom";
import Card from "../../components/Card";
import "./styles.css";

function WhosWatching() {
  return (
    <>
      <div className="main-container-whoswatchihing">
        <div className="container-whoswatchihing">
          <div>
            <h1>Quem está assistindo ?</h1>
          </div>
          <div>
            <Link to="/home-profile" style={{ textDecoration: "none" }}>
              {" "}
              <Card />
            </Link>
          </div>
          <div>
            <button>Gerenciar perfils</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhosWatching;
