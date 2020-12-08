import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Navbar, 
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav, 
  NavItem,
  NavLink
} from 'reactstrap';

function CustomNavbar(props) {
  const history = useHistory();
  let [isOpen, setNavbar] = useState(false);

  function toggle() {
    setNavbar(!isOpen);
  };

  return(
    <Navbar color="dark" dark expand="md">
      <NavbarBrand onClick={() => history.push('/')}>Counter</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink onClick={() => history.push('/settings')}>Info</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default CustomNavbar;