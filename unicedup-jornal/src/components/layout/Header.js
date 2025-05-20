import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { FaNewspaper, FaCalendarAlt, FaImages, FaBullhorn, FaInfoCircle, FaStar, FaWikipediaW, FaSignInAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

// Componente de cabeçalho principal do site
const Header = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Função para lidar com o logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <SiteLogo to="/">UniCEDUP</SiteLogo>
        <SiteTagline>Jornal Digital do Grêmio Estudantil</SiteTagline>
      </LogoContainer>
      
      <NavContainer>
        <NavLink to="/noticias"><FaNewspaper /> Notícias</NavLink>
        <NavLink to="/eventos"><FaCalendarAlt /> Eventos</NavLink>
        <NavLink to="/galeria"><FaImages /> Galeria</NavLink>
        <NavLink to="/avisos"><FaBullhorn /> Avisos</NavLink>
        <NavLink to="/sobre"><FaInfoCircle /> Sobre</NavLink>
        <NavLink to="/destaques"><FaStar /> Destaques</NavLink>
        <NavLink to="/wikipedia"><FaWikipediaW /> Wikipedia</NavLink>
      </NavContainer>
      
      <AuthContainer>
        {currentUser ? (
          <>
            <UserInfo>
              <FaUserCircle /> {currentUser.email}
            </UserInfo>
            <DashboardLink to="/dashboard">Painel</DashboardLink>
            <LogoutButton onClick={handleLogout}>
              <FaSignOutAlt /> Sair
            </LogoutButton>
          </>
        ) : (
          <LoginLink to="/login">
            <FaSignInAlt /> Entrar
          </LoginLink>
        )}
      </AuthContainer>
    </HeaderContainer>
  );
};

// Estilos usando styled-components
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #1a4b8c;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

const SiteLogo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  
  &:hover {
    color: #a3c5ff;
  }
`;

const SiteTagline = styled.span`
  font-size: 0.9rem;
  color: #a3c5ff;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background-color: #2c5ea0;
  }
`;

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
`;

const LoginLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #2c5ea0;
  
  &:hover {
    background-color: #3a6eaf;
  }
`;

const DashboardLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #2c5ea0;
  
  &:hover {
    background-color: #3a6eaf;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: white;
  background-color: #d32f2f;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #b71c1c;
  }
`;

export default Header;
