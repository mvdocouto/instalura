import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../../utils/tests/testUtils';

import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Username"
        value="Jonh Doe"
        onChange={() => {}}
        name="login"
      />,
    );
    const textField = screen.getByPlaceholderText(/Username/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            isTouched
          />
          ,
        );

        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'teste@test.com');
        expect(onChangeMock).toHaveBeenCalledTimes(14);
      });
    });
  });

  describe('when field is invalid', () => {
    test('displays the respective error message', () => {
      render(
        <TextField
          placeholder="Email"
          value="emailemail.com"
          onChange={() => {}}
          name="email"
          isTouched
          error="O campo email é obrigatório"
        />
        ,
      );

      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('emailemail.com');
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email é obrigatório');
      expect(inputEmail).toMatchSnapshot();
    });
  });
});
