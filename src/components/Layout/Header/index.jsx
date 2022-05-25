import React from 'react';
import Text from '../../../ui/Text';
import Burger from './burger.jsx';
import './index.css';

const Header = () => {
  return (
    <header>
      <Text>TOMATO WAVE</Text>
      <Burger />
    </header>
  )
}

export default Header;
