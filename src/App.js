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

          {/* Routes */}
          <Routes>
            {/* Home Route */}
            <Route path='/' element={<Home />} />

            {/* About Route */}
            <Route path='/about' element={<About />} />
        
            {/* Page NotFound Route */}
            <Route path='/notfound' element={<NotFound />} />
          
            {/* Page Doesnt Exist */}
            <Route path='/*' element={<NotFound />} />
          </Routes>

        </main>

        
    </Router>
  );
}

export default App;
