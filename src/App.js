import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import Register from './Register';
import Main from './Main';
import Catalog from './Catalog';
import Service from './Service';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <a href="#" class="logo">  PlayOff <br />store</a>
          <div class="bx bx-menu" id="menu-icon"></div>
          <ul class="navbar">
            <NavLink to={"/registration"}>
            <li><a href="#">Registration</a></li>
            </NavLink>
            <NavLink to={"/"}>
            <li><a href="#">Main</a></li>
            </NavLink>
            <NavLink to={"/catalog"}>
            <li><a href="/catalog">Catalog</a></li>
            </NavLink>
            <NavLink to={"/service"}>
            <li><a href="#service">Service</a></li>
            </NavLink>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </header>
        <Routes>
          <Route path="/registration" element={<Register/>} />
          <Route path="/" element={<Main/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/service" element={<Service/>} />
        </Routes>
        <div class="copyright">
          <p>PlayOff's All Rights Reserved</p>
        </div>
      </div >
  );
}

export default App;
