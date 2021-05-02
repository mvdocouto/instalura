import React from 'react';
import user from '@testing-library/user-event';
import LoginForm from './LoginForm';
import {
  render,
  act,
  screen,
  waitFor,
} from '../../../utils/tests/testUtils';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});

describe('<LoginForm />', () => {
  describe('when from fields are valid', () => {
    test('complete the sumission', async () => {
      await act(async () => render(
        <LoginForm
          onSubmit={onSubmit}
        />,
      ));

      const inputUsuario = screen.getByPlaceholderText('Usuário');
      user.type(inputUsuario, 'someusername');
      await waitFor(() => expect(inputUsuario).toHaveValue('someusername'));

      const inputSenha = screen.getByPlaceholderText('Senha');
      user.type(inputSenha, 'somepassword');
      await waitFor(() => expect(inputSenha).toHaveValue('somepassword'));

      expect(screen.getByRole('button')).not.toBeDisabled();

      user.click(screen.getByRole('button'));

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    test('displays the respective errors', async () => {
      render(<LoginForm onSubmit={onSubmit} />);

      const inputUsuario = screen.getByPlaceholderText('Usuário');
      inputUsuario.focus();
      inputUsuario.blur();

      await waitFor(() => screen.getByRole('alert'));

      expect(screen.getByRole('alert')).toHaveTextContent('Preencha ao menos 3 caracteres');
    });
  });
});
