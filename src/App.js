import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registeration from './pages/Registeration';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" exact element={<Registeration />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/dashboard"  element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
