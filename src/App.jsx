import "./App.css";
import img from "./images/png.png";
import shape from "./images/shape.png";
import clock from "./images/clock.png";
import oval from "./images/oval.png";

function App() {
  return (
    <div className="container">
      <div className="box">
        <img src={img} alt="img" />
        <div className="eye"></div>
      </div>
      <h2 className="aqua">Eqvilibrium</h2>
      <p>Our Eqvilibrium collection promotes balanace and calm</p>
      <div className="eth">
        <div>
          <img src={shape} alt="shape" />
          <span style={{ color: "rgba(0, 255, 248, 1)" }}>0.041 ETH</span>
        </div>
        <div>
          <img src={clock} alt="clock" />
          <span style={{ color: " rgba(139, 172, 217, 1)" }}>3 days left</span>
        </div>
      </div>
      <div className="line">
        <div className="comment">
          <img src={oval} alt="img" />
          <h4 style={{ color: "rgba(139, 172, 217, 1)" }}>Creation of</h4>
          <span className="aqua">jules Wyvern</span>
        </div>
      </div>
    </div>
  );
}

export default App;
