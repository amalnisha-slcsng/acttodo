import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  const [users, setusers] = useState([
    {
      username: "Amal",
      password: "123",
    }
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login users={users} setusers={setusers} />} /> 
          <Route path="/signup" element={<Signup users={users} setusers={setusers} />} /> 
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
