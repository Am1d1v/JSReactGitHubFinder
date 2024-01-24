import './App.css';
import { BrowserRouter as  Router, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <Router>
        <NavBar title="GitHub Finder"/>
    </Router>
  );
}

export default App;
