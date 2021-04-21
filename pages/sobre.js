import React from 'react';
import pageHOC from '../src/hoc';

const AboutScreen = () => (<h1>Pagina Sobre</h1>);

export default pageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
