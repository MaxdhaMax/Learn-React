import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [name, setName] = useState("max");
  const changeName = (name) => setName(name);
  const changeInput = (event) => setName(event.target.value);
  const buttonsMarkup = (
    <div>
      <button className="button button2">Blue</button>
      <button className="button button3">Red</button>
    </div>
  );

  return (
    <div className="App">
      <button className="button" onClick={() => changeName("John")}>
        Change Name
      </button>
      <Card name={name} title="International Response Architect avatar" onChangeName={() => changeName("alan")} onChangeInput={changeInput} avatar="https://cdn.fakercloud.com/avatars/terrorpixel_128.jpg">
        {buttonsMarkup}
      </Card>
    </div>
  );
}

export default App;
