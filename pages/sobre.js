import AboutScreen, { getContent } from '../src/components/Screens/AboutScreen';

import pageHOC from '../src/hoc';

export async function getStaticProps() {
  const messages = await getContent();

  return {
    props: {
      messages,
    },
  };
}

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
