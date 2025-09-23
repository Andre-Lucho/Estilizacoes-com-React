import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { FooterContainer, FooterText } from './Footer.styled';

const Footer = () => {
  const { darkTheme } = useContext(GlobalContext);
  return (
    <FooterContainer className={darkTheme ? 'dark' : ''}>
      <FooterText>
        Copyright - Open Source🐧 - Todos os direitos livres - 2025
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
