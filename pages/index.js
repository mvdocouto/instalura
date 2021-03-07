import React, { useState } from 'react';
import Header from '../src/components/Molecules/Header';
import Footer from '../src/components/Molecules/Footer';
import { Text } from '../src/components/Atom/Text';
import Modal from '../src/components/Atom/Modal';
import Button from '../src/components/Atom/Button';
import Grid from '../src/components/Organisms/Grid';
import Box from '../src/components/Organisms/Box';
import FormCadastro from '../src/components/Molecules/FormCadastro';

export default function Home() {
  const [isModalOpen, setModalState] = useState(false);

  const openModal = () => {
    setModalState(!isModalOpen); // novo state sendo atribuido
  };

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <FormCadastro propsDoModal={propsDoModal} />
        )}

      </Modal>
      <Header openModal={openModal} />
      <Grid.Container>
        <Grid.Row>
          <Grid.Col offset={{ xs: 0, md: 1 }} value={{ xs: 12, md: 5 }}>
            <div>
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </Text>

              <Button
                variant="primary.main"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display="block"
                onClick={() => openModal()}
              >
                Cadastrar
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              alt="Imagem de celular com páginas internas do projeto com o perfil do Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
