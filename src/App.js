import "./App.css";
import Card from "./Card";
import faker from "faker";

function App() {
  return (
    <div className="App">
      <Card name={faker.name.firstName()} title={faker.name.jobTitle()} avatar={faker.image.avatar()} />
      <Card name={faker.name.firstName()} title={faker.name.jobTitle()} avatar={faker.image.avatar()} />
      <Card name={faker.name.firstName()} title={faker.name.jobTitle()} avatar={faker.image.avatar()} />
    </div>
  );
}

export default App;
