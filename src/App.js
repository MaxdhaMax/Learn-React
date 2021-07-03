import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  // state
  const [name, setName] = useState("max");
  const [showCard, setShowCard] = useState(true);
  // functions
  const changeName = (name) => setName(name);
  const changeInput = (event) => setName(event.target.value);
  const toogleShowCard = () => setShowCard(!showCard);

  const buttonsMarkup = (
    <div>
      <button className="button button2">Blue</button>
      <button className="button button3">Red</button>
    </div>
  );
  const cardMarkup = showCard && (
    <Card name={name} title="International Response Architect avatar" onChangeName={() => changeName("alan")} onChangeInput={changeInput} avatar="https://cdn.fakercloud.com/avatars/terrorpixel_128.jpg">
      {buttonsMarkup}
    </Card>
  );

  return (
    <div className="App">
      <button className="button" onClick={toogleShowCard}>
        show or hide
      </button>
      {cardMarkup}
    </div>
  );
}

export default App;
