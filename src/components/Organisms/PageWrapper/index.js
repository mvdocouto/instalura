/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Atom/Modal';
import SEO from '../../Atom/SEO';
import Footer from '../../Molecules/Footer';
import FormCadastro from '../../Molecules/FormCadastro';
import Header from '../../Molecules/Header';
import Box from '../Box';

export const PageWrapperContext = React.createContext({
  toogleModal: () => {},
});

const PageWrapper = ({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) => {
  const [isModalOpen, setModalState] = useState(false);

  const openModal = () => {
    setModalState(!isModalOpen); // novo state sendo atribuido
  };

  return (
    <PageWrapperContext.Provider value={{
      toogleModal: () => {
        setModalState(!isModalOpen); // novo state sendo atribuido
      },
    }}
    >
      <SEO
        {...seoProps}
      />
      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        {...pageBoxProps}
        // justifyContent="space-between"
        // backgroundImage="url(/images/bubbles.svg)"
        // backgroundRepeat="no-repeat"
        // backgroundPosition="bottom right"
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

        {menuProps.display && (
        <Header openModal={openModal} />
        )}

        {children}
        <Footer />
      </Box>
    </PageWrapperContext.Provider>
  );
};

PageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

PageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
