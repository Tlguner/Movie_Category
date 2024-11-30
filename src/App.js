import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import Movie from "./Components/Pages/movie.jsx";
import Comedy from "./Components/Pages/Comedy.jsx";
import Action from "./Components/Pages/Action.jsx";
import Drama from "./Components/Pages/Drama.jsx";
import Thriller from "./Components/Pages/Thriller.jsx";
import Horror from "./Components/Pages/Horror.jsx";
import Romance from "./Components/Pages/Romance.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {<Route path="/movie" element={<Movie />} />}
            <Route path="/Comedy" element={<Comedy />} />
            <Route path="/Action" element={<Action />} />
            <Route path="/Drama" element={<Drama />} />
            <Route path="/Thriller" element={<Thriller />} />
            <Route path="/Horror" element={<Horror />} />
            <Route path="/Romance" element={<Romance />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
