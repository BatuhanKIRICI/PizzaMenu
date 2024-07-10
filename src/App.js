import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Delivery Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="./pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="./pizzas/funghi.jpg"
        price={12}
      />
    </main>
  );
}

function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <div className="pizza">
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (isOpen) alert("We're currently open!");
  else alert("We're currently closed.");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
  );
}

export default App;
