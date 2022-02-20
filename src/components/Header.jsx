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
      <NavbarBrand tag={NextLink} href={{ pathname: "/" }} passHref>
        <a className="navbar-brand">Home</a>
      </NavbarBrand>

      <NavbarToggler onClick={() => setCollapse(!collapse)} />
      <Collapse isOpen={collapse} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NextLink href={{ pathname: "/users" }} passHref>
              <NavLink>GitHub users</NavLink>
            </NextLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
