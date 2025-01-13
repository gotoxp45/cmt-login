import React, { useState } from 'react';
import './LoginForm.css';


const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-header">Welcome Back</h2>
        <p className="login-subtext">Please sign in to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-options">
          <div className="form-check" style={{ display: "flex", alignItems: "center" }}>
  <input
    type="checkbox"
    className="form-check-input"
    id="rememberMe"
    name="rememberMe"
    checked={formData.rememberMe}
    onChange={handleChange}
    style={{ marginRight: "8px" }} // Add spacing between checkbox and label
  />
  <label className="form-check-label" htmlFor="rememberMe">
    Remember me
  </label>
</div>

            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
