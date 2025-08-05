import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Skor from './pages/Skor'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Beranda</Link>
          <Link to="/skor">Skor</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skor" element={<Skor />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
