import React from 'react';
import pageHOC from '../../src/hoc';

import Box from '../../src/components/Organisms/Box';
import { Text } from '../../src/components/Atom/Text';
import Grid from '../../src/components/Organisms/Grid';
import Link from '../../src/components/Atom/Link';
import Logo from '../../src/components/Atom/Logo';
import LoginForm from '../../src/components/Screens/LoginForm';

import { PageWrapperContext } from '../../src/components/Organisms/PageWrapper';

function LoginScreen() {
  const websitePageContext = React.useContext(PageWrapperContext);

  return (
    <Grid.Container
      display="flex"
      flex="1"
      alignItems="center"
    >
      <Grid.Row
        flex="1"
        alignItems="center"
        justifyContent="center"
      >
        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          value={{ xs: 12, md: 6, lg: 4 }}
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="37px"
            marginBottom="37px"
          >
            <Link
              href="/"
              color="secondary.main"
            >
              <Logo size="large" />
            </Link>
          </Box>
          <LoginForm />
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign="center"
          >
            {'Não tem uma conta? '}
            <Link
              href="/"
              color="secondary.main"
              onClick={(event) => {
                event.preventDefault();
                websitePageContext.toogleModal();
              }}
            >
              Cadastre-se
            </Link>
          </Text>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Box
            display="flex"
            justifyContent="center"
          >
            <img
              align="center"
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

export default pageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
