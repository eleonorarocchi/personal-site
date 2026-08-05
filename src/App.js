import { useEffect } from 'react';
import './App.css';
import Home from "./components/Home/Home.tsx";
import Initiatives from "./components/Initiatives/Initiatives.tsx";
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import './assets/css/yellow.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Conferences from "./components/Conferences/Conferences.tsx";
import Article from "./components/Article/Article.tsx";

function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iniziative" element={<Initiatives />} />
        <Route path="/articolo/:slug" element={<Article />} />
        <Route path="/conferenze" element={<Conferences />} />
      </Routes>
    </Router>
  );
}

export default App;
