import "./styles.css";
import imageCard from "../../assets/imageCard.jpeg";

function Card() {
  return (
    <div className="card-container">
      <div className="card-info">
        <div className="img-card">
          <img src={imageCard} alt="" />
        </div>
        <div className="card-name">
          <h3>Guilherme</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
