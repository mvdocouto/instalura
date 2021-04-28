import React from 'react';
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
});
