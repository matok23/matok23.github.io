import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/"><h1>PORTFOLIO</h1></Link>

        <div>
          <Link to="/">Profile</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  );
}

export default App;