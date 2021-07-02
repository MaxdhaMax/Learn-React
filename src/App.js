import "./App.css";
import Card from "./Card";
import faker from "faker";

function App() {
  const buttonsMarkup = (
    <div>
      <button className="button button2">Blue</button>
      <button className="button button3">Red</button>
    </div>
  );

  return (
    <div className="App">
      <Card name={faker.name.firstName()} title={faker.name.jobTitle()} avatar={faker.image.avatar()}>
        {buttonsMarkup}
      </Card>
      <Card name={faker.name.firstName()} title={faker.name.jobTitle()} avatar={faker.image.avatar()}>
        {buttonsMarkup}
      </Card>
      <Card name={faker.name.firstName()} title={faker.name.jobTitle()} avatar={faker.image.avatar()}>
        {buttonsMarkup}
      </Card>
    </div>
  );
}

export default App;
