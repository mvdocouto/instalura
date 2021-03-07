import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Atom/Logo';
import Button from '../../Atom/Button';
import { Text } from '../../Atom/Text';

import MenuWrapper from './style';

export default function Header({ openModal }) {
  const listLinks = [
    { url: '/', name: 'Home' },
    { url: '/faq', name: 'Perguntas Frequentes' },
    { url: '/sobre', name: 'Sobre' },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {listLinks.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button type="button" ghost variant="secondary.main">
          Entrar
        </Button>
        <Button
          type="button"
          variant="primary.main"
          onClick={() => openModal()}
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Header.propTypes = {
  openModal: PropTypes.func.isRequired,
};
