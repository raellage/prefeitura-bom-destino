import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  img {
    margin: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: flex-start;
  padding-top: 2rem;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
    padding-top: 1rem;
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Prefeitura Bom Destino" />
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Noticias</Link>
      <Link to="/transparencia">Transparência</Link>
      <Link to="/servicos">Serviços</Link>
      <Link to="/faleconosco">Fale Conosco</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
