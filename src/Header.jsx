import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

export default function Header() {
  const [collapse, setCollapse] = useState(false);

  return (
    <Navbar color="light" expand="md" light>
      <NavbarBrand href="/">На главную</NavbarBrand>
      <NavbarToggler onClick={() => setCollapse(!collapse)} />
      <Collapse isOpen={collapse} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/contacts">Контакты</NavLink>
          </NavItem>
        </Nav>
        <Button color="primary" className="ms-auto">
          Войти
        </Button>
      </Collapse>
    </Navbar>
  );
}
