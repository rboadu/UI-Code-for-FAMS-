import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import Home from "./components/Home";
import Prof from "./components/Prof"; 
import './App.css'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/Login',
      element: <Login />,
    },
    {
      path: '/update',
      element: <Prof />,
    },
  ]);

  return (
    <>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>  || 
          <Link to="/Login"> Login</Link> || 
          <Link to="/Prof"> Professor Chatbot</Link> 
        </nav>

          {routes}
      </div>
    </>
  )
}

export default App;
