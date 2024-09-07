import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Movie from "./Components/Pages/movie";
import Comedy from "./Components/Pages/Comedy";
import Action from "./Components/Pages/Action";
import Drama from "./Components/Pages/Drama";
import Thrill from "./Components/Pages/Thrill";
import Horror from "./Components/Pages/Horror";
import Romance from "./Components/Pages/Romance";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/Comedy" element={<Comedy />} />
            <Route path="/Action" element={<Action />} />
            <Route path="/Drama" element={<Drama />} />
            <Route path="/Thrill" element={<Thrill />} />
            <Route path="/Horror" element={<Horror />} />
            <Route path="/Romance" element={<Romance />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
