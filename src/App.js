import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import CategoryBox from './components/CategoryBox'; // Adjust the path as needed
import CategoryDetail from './components/CategoryDetail'; // Import the detail component

// Separate component to handle navigation
function CategoryContainer() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="category-container">
        <CategoryBox title="Frontend" details={['React', 'Angular', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript']} navigate={navigate} />
        <CategoryBox title="Backend" details={['Node.js', 'Express', 'Python', 'Java', 'Ruby']} navigate={navigate} />
        <CategoryBox title="Data Storage" details={['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite']} navigate={navigate} />
      </div>
    </div>
  );
}

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (username === 'user' && password === 'password') ||
      (username === 'sunil' && password === 'sunil123') ||
      (username === 'subbu' && password === 'subbu123') ||
      (username === 'rahul' && password === 'rahul123')
    ) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/details/:category" element={<CategoryDetail />} />
        <Route path="/" element={
          !isLoggedIn ? (
            <div className="App">
              <form onSubmit={handleLogin} className="login-form">
                <h1>Login</h1>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Login</button>
              </form>
            </div>
          ) : (
            <CategoryContainer />
          )
        } />
      </Routes>
    </Router>
  );
}

export default App;
