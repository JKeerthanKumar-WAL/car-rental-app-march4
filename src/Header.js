import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Employees from './Employees';
const Header = () => {
  return (
    <div className='Header-div'>
      <h1>WAL Car Rental App</h1>
        <BrowserRouter>
          <Link to="/"><b>Home</b></Link><br />
          <Link to="/about"><b>About</b></Link><br />
          <Link to="/contact"><b>Contact</b></Link><br />
          <Link to="/employees"><b>Show Employees</b></Link><br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={< About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/employees" element={< Employees />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};
export default Header;
