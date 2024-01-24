import './App.css';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <Router>
        <NavBar title="GitHub Finder"/>

        <main className='container'>

          {/* Home Route */}
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

          {/* About Route */}
          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>

          {/* Page NotFound Route */}
          <Routes>
            <Route path='/asd' element={<NotFound />} />
          </Routes>


        </main>
    </Router>
  );
}

export default App;
