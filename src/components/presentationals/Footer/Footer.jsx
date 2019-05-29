import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Privacy</a>
        </li>
        <li>
          <a href="">Terms of use</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
