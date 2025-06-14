import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Usuarios from './pages/User/User'; 
import Tareas from './pages/Task/Tareas';
import About from './pages/About/About';



const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/tareas" element={<Tareas />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/acerca" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
