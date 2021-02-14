import React from "react";

import { Logo } from "../../Atom/Logo";
import { MenuWrapper } from "./style";

export default function Header() {

  const listLinks = [
    { url: "/", name: "Home" },
    { url: "/faq", name: "Perguntas Frequentes" },
    { url: "/sobre", name: "Sobre" },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {listLinks.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>Cadastar</button>
        <button>Entrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
