import { useState } from 'react';
import {
  Navbar, 
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav, 
  NavItem,
  NavLink
} from 'reactstrap';

function CustomNavbar() {
  let [isOpen, setNavbar] = useState(false);

  function toggle() {
    setNavbar(!isOpen);
  };

  return(
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Counter</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/info">Info</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default CustomNavbar;