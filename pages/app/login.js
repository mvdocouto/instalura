import React from 'react';
import pageHOC from '../../src/hoc';

import Box from '../../src/components/Organisms/Box';

const LoginScreen = () => (
  <Box
    display="flex"
    flexDirection="column"
    flex="1"
  >
    <h1>Login</h1>
  </Box>
);

function LoginPage() {
  return (
    <LoginScreen />
  );
}

export default pageHOC(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});
