import { useState } from "react";
import NextLink from "next/link";

import {
  Navbar,
  NavbarBrand,
} from "reactstrap";

export default function Header() {
  const [collapse, setCollapse] = useState(false);

  return (
    <Navbar color="light" expand="md" light>
      <NavbarBrand tag={NextLink} href={{ pathname: "/" }} passHref>
        <a className="navbar-brand">Home</a>
      </NavbarBrand>
    </Navbar>
  );
}
