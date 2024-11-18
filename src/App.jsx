import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import Home from "./components/Home";
import Prof from "./components/Prof"; 
import About from "./components/About";
import Logo from "./components/teamLogo.jpg";
import './App.css';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/Login', element: <Login /> },
    { path: '/Prof', element: <Prof /> },
    { path: '/About', element: <About /> },
  ]);

  return (
    <>
      <div className="App">
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          <Link className="navbar-brand" to="/">
              <img 
                src={Logo}  // URL OF LOGO!
                alt="FAMs Logo"
                width="110"
                height="70"
                className="famsLogo"
               
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Prof">Professor Chatbot</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About FAMs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Render the routes */}
        {routes}
      </div>
    </>
  );
}

export default App;

