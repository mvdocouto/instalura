import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import Button from '../../Atom/Button';
import TextField from '../../Atom/TextField';
import Box from '../../Organisms/Box';
import Grid from '../../Organisms/Grid';
import { Text } from '../../Atom/Text';

import errorAnimation from '../../../animations/error.json';
import successAnimation from '../../../animations/success.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const FormContent = () => {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = useState({
    nome: '',
    usuario: '',
  });

  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmited(true);

    // Data Transfer Object
    const userDTO = {
      username: userInfo.usuario,
      name: userInfo.nome,
    };

    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    })
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          return respostaDoServidor.json();
        }

        throw new Error('Não foi possível cadastrar o usuário agora :(');
      })
      .then((respostaConvertidaEmObjeto) => {
        setSubmissionStatus(formStates.DONE);

        // eslint-disable-next-line no-console
        console.log(respostaConvertidaEmObjeto);
      })
      .catch((error) => {
        setSubmissionStatus(formStates.ERROR);
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };

  useEffect(() => {
    if (userInfo.nome.length > 0 && userInfo.usuario.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  },
  [userInfo.nome, userInfo.usuario]);

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
        >
          Pronto para saber da vida dos outros?
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          marginBottom="32px"
        >
          Você está a um passo de saber tudoo que está
          rolando no bairro, complete seu cadastro agora!
        </Text>

        <div>
          <TextField
            placeholder="Nome"
            name="nome"
            value={userInfo.nome}
            onChange={handleChange}
          />
        </div>

        <div>
          <TextField
            placeholder="Usuário"
            name="usuario"
            value={userInfo.usuario}
            onChange={handleChange}
          />
        </div>

        <Button
          variant="primary.main"
          type="submit"
          disabled={!isValid}
          fullWidth
        >
          Cadastrar
        </Button>
      </form>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Lottie
            width="200"
            height="200"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Usuário cadastrado com sucesso.
          </Text>
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Lottie
            width="100px"
            height="100px"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Erro ao cadastrar um o usuário.
          </Text>
        </Box>
      )}

    </div>
  );
};

export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormCadastro.propTypes = {
  propsDoModal: PropTypes.shape({
    isOpen: PropTypes.bool,
    children: PropTypes.func,
    onClose: PropTypes.func,
  }).isRequired,
};
