import "./App.css";
import avatar from "./Images/img_avatar.png";

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={avatar} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
      <div className="card">
        <img src={avatar} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
      <div className="card">
        <img src={avatar} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
