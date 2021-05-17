import React from 'react';

import './header.css'

const Header = () => {
  return(
    <div className="app-header d-flex">
      <h1>Twider</h1>
      <h2>posts: 5 liked: 0</h2>
    </div>
  );
}

export default Header;