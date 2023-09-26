import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./Router";
import DrawerAppBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
