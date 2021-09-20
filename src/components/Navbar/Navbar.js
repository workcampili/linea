import { useState } from "react";
import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
  MobileMenuIcon,
  MiniNav
} from "./Navbar.elements";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";


const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <MiniNav></MiniNav>
      <Container>
        <Wrapper>

          <img className="logo" src="assets/logo-izq.png" alt="logo" />

          <MobileMenuIcon onClick={() => handleShowMobileMenu()}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileMenuIcon>

          <Menu showMobileMenu={showMobileMenu}>
            <MenuItem onClick={() => handleShowMobileMenu()}>
              <a activeClassName="item-active" href="https://andromaco95aniversario.com/agenda">Volver</a>
            </MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
