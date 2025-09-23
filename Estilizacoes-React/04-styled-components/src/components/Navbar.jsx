import { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import { FaShoppingCart, FaMoon } from 'react-icons/fa';
import { GrSun } from 'react-icons/gr';
import {
  NavbarContainer,
  Nav,
  NavLink,
  NavIcons,
} from './Navbar.styled';

const Navbar = () => {
  const { setDarkTheme, darkTheme } = useContext(GlobalContext);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  function handleTheme() {
    setDarkTheme((prev) => !prev);
  }

  return (
    <NavbarContainer className={darkTheme ? 'dark' : ''}>
      <Nav>
        <NavLink>+PraTI - Shopping</NavLink>
        <NavIcons>
          {darkTheme ? (
            <FaMoon className="icon" onClick={handleTheme} />
          ) : (
            <GrSun className="icon" onClick={handleTheme} />
          )}
          <FaShoppingCart className="icon" />
        </NavIcons>
      </Nav>
    </NavbarContainer>
  );
};
export default Navbar;
