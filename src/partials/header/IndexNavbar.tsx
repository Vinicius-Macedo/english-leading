import { useState } from "react";

import { Logo } from "./Logo";
import { NavbarLink } from "./NavbarLink";

//imgs

export function IndexNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  let menuState = showMenu === true ? "nav-menu open" : "nav-menu";

  return (
    <>
      <nav className={menuState}>
        <div></div>
        <div className="toggle-button" onClick={() => setShowMenu(!showMenu)}>
          <div className="bars"></div>
        </div>
        <ul className="menu-items">
          <NavbarLink
            href="/"
            linkName="Home"
            onClick={() => setShowMenu(false)}
          />
          <NavbarLink
            href="/cursos/"
            linkName="Cursos"
            onClick={() => setShowMenu(false)}
          />
          <NavbarLink
            href="/planos/"
            linkName="Planos"
            onClick={() => setShowMenu(false)}
          />
          <li className="item">
            <a href="#inscricao" className="nav-button">
              Entrar
            </a>
          </li>
          <li className="item">
            <a href="#inscricao" className="nav-button blue">
              Criar conta
            </a>
          </li>
        </ul>
      </nav>
      <div id="overlay"></div>
    </>
  );
}
