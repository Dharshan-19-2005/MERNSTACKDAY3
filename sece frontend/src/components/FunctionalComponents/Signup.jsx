import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' }); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', formData);
    } else {
      console.log('Signup:', formData);
    }
    setFormData({ username: '', password: '' });
  };
  const handleSignup = () => {
    console.log("Event Triggered");
    const req = axios.post("http://localhost:3001/signup",({
      username:username,
      password:password
    }))
    var navigate=useNavigate;
    console.log(req);
    navigate("/login");
  };

  return (
    <form onClick={handleSignup}>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{isLogin ? 'Login Page' : 'Signup Page'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Signup' : 'Login'}
      </button>
    </div>
    </form>
  );
};