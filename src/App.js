import './App.css';
import Home from "./components/Home/Home.tsx";
import Initiatives from "./components/Initiatives/Initiatives.tsx";
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/yellow.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Conferences from "./components/Conferences/Conferences.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iniziative" element={<Initiatives />} />
        <Route path="/conferenze" element={<Conferences />} />
      </Routes>
    </Router>
  );
}

export default App;
