import { NavLink } from 'react-router-dom';

import { icons } from '../../utils/icons';

export const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__logo'>
              <img src={icons.logo} alt='' />
            </div>
            <nav className='header__nav'>
              <ul className='header__nav__wrapper'>
                <li className='header__nav__item'>
                  <NavLink exact to='/' activeClassName='active-link'>
                    Main Page
                  </NavLink>
                </li>
                <li className='header__nav__item'>
                  <NavLink exact to='/about' activeClassName='active-link'>
                    About Page
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
