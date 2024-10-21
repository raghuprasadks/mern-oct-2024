import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const url = 'http://localhost:5000/user';

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!mobile) newErrors.mobile = 'Mobile number is required';
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const signup = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      const payload = {
        name,
        email,
        mobile,
        password,
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          // Handle successful signup (e.g., navigate to login page)
          navigate('/login');
        } else {
          // Handle errors returned by the server
          const errorData = await response.json();
          setErrors({ server: errorData.message });
        }
      } catch (error) {
        // Handle network errors
        setErrors({ server: 'Network error. Please try again later.' });
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={signup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="error">{errors.name}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {errors.mobile && <div className="error">{errors.mobile}</div>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>}
        {errors.server && <div className="error">{errors.server}</div>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;