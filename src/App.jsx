import "./App.css";
import Card from "./components/Card";

function App() {
  const clients = [
    {
      name: "Mr.Hoffmann",
      age: 52,
      isPremium: false,
      country: "de",
    },
    {
      name: "Ms. Smith",
      age: 23,
      isPremium: true,
      country: "en",
    },
    {
      name: "Amélie",
      age: 25,
      isPremium: false,
      country: "fr",
    },
    {
      name: "Paco paquito...",
      age: 67,
      isPremium: true,
      country: "es",
    },
  ];

  return (
    <div className="App">
      <Card clientsArr={clients[0]} />
      <Card clientsArr={clients[1]} />
      <Card clientsArr={clients[2]} />
      <Card clientsArr={clients[3]} />
    </div>
  );
}

export default App;
