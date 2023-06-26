import "./App.css";
import Home from "./components/Home";
import ApiProvider from "./components/context/context-api";

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <Home />
      </ApiProvider>
    </div>
  );
}

export default App;
