import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>You-topia</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/journal">Journal</a></li>
          <li><a href="/personality">Personality</a></li>
          <li><a href="/values">Values</a></li>
          <li><a href="/identity">Identity</a></li>
          <li><a href="/reflection">Reflection</a></li>
          <li><a href="/timeline">Timeline</a></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;