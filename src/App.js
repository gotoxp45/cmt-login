import React from 'react';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
    // Handles the login form submission
    // Currently logs the form data to console
    // Can be modified to handle actual authentication logic
    
    // @param {Object} formData - Contains email, password, and rememberMe values
   
  const handleLogin = (formData) => {
    console.log('Login Data:', formData);
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default App;