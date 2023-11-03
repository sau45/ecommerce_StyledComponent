import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../image/logo.jfif'

const NavbarWrapper = styled.div`
  position:fixed;
  z-index:3;
  width:98%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Logo = styled.img`
  height: 40px;
  border-radius:5px
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
      position: absolute;
    display: ${(props) => (props.mobileMenuOpen ? 'flex' : 'none')};
    text-align: center;
    height: 184%;
    width: 100%;
    flex-direction: column;
    top: 60px;
    right: 26px;
    background-color: #333;
    z-index: 1;
    
  }
`;

const MenuItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    margin-right:27px
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 3px 0;
`;

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavbarWrapper>
      <Logo src={logo} alt="Logo" />
      <Menu mobileMenuOpen={mobileMenuOpen}>
        <MenuItem>
          <MenuLink href="#">Become a Seller</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Sign In</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Cart</MenuLink>
        </MenuItem>
      </Menu>
      <Hamburger onClick={toggleMobileMenu}>
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </Hamburger>
    </NavbarWrapper>
  );
}

export default Navbar;
