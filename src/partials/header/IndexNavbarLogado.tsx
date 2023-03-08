import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Logo } from "./Logo";
import { NavbarLink } from "./NavbarLink";

//imgs

export function IndexNavbarLogado() {
  const [showMenu, setShowMenu] = useState(false);
  let menuState = showMenu === true ? "nav-menu open" : "nav-menu";

  return (
    <>
      <nav className={menuState}>
        <Logo />
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
            <Link href="/">
              <Image
                src={"/testimonial-card.png"}
                alt="Foto de perfil"
                className="rounded-full border border-[#fff] w-30 h-30"
              ></Image>
            </Link>
          </li>
          <li className="item">
            <Link href="/">
              <a onClick={() => setShowMenu(false)} className="link red">
                Sair
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div id="overlay"></div>
    </>
  );
}
