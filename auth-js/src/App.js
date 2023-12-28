import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Post from './pages/Post';
import Users from './pages/Users';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Cropper from './pages/Cropper';

import Population from 'components/Population';

import logoImage from './img/1.jpg';
import backgroundImage from './img/2.jpeg';

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
};

const Header = () => {
  return (
    <header className="header" style={backgroundStyle}>
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <nav className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/home" className="nav-link">HomePage</NavLink>
        <NavLink to="/post" className="nav-link">Post</NavLink>
        <NavLink to="/users" className="nav-link">Users</NavLink>
        <NavLink to="/cropper" className="nav-link">Cropper</NavLink>
        <NavLink to="/populat" className="nav-link">Population</NavLink>
      </nav>
    </header>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={HomePage} />
        <Route path="/post" component={Post} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={LoginPage} />
        <Route path="/cropper" component={Cropper} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/populat" component={Population} />
      </Switch>
    </Router>
  );
}

export default App;
