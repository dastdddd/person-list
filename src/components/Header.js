import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>Создать список</Link>
      <Link to='/list'>Списки</Link>
    </div>

  );
};

export default Header;