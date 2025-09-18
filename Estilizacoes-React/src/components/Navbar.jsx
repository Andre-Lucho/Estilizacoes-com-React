import { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

import { FaShoppingCart, FaMoon } from 'react-icons/fa';
import { GrSun } from 'react-icons/gr';

import '../styles/navbar.scss';

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useLocalStorage('theme', false);
  const root = document.getElementById('root');

  useEffect(() => {
    if (darkTheme) {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  function handleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <div className="navbar-container">
      <nav className="nav-container">
        <a>React Shopping</a>
        <div className="icons-container">
          {darkTheme ? (
            <FaMoon className="icon" onClick={handleTheme} />
          ) : (
            <GrSun className="icon" onClick={handleTheme} />
          )}

          <FaShoppingCart className="icon" />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
