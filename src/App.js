import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Products from "./Products";
import NotFound from './NotFound';

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          < Route path="/products" element={<Products />} />
          <Route path="/else" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
