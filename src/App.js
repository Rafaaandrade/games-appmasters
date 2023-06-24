import "./App.css";
import APIContextProvider from "./Context/APIContext";
import Home from "./Pages/Home";

function App() {

  return (
    <APIContextProvider>
      <div className="App">
        <Home/>
      </div>
    </APIContextProvider>
  );
}

export default App;
