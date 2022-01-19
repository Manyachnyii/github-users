import { useState } from "react";
import NextLink from "next/link";

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
      <NextLink href="/" passHref>
        <NavbarBrand href="/">На главную</NavbarBrand>
      </NextLink>

      <NavbarToggler onClick={() => setCollapse(!collapse)} />
      <Collapse isOpen={collapse} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NextLink href="/contacts" passHref>
              <NavLink href="/contacts">Контакты</NavLink>
            </NextLink>
          </NavItem>
        </Nav>
        <Button color="primary" className="ms-auto">
          Войти
        </Button>
      </Collapse>
    </Navbar>
  );
}
