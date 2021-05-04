import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';
import AboutScreen from '../src/components/Screens/AboutScreen';

import pageHOC from '../src/hoc';

export async function getStaticProps() {
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const DatoCMSURL = process.env.DATO_CMS_URL;

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const query = GraphQLTag`
    query {
      pagesobre{
        pageTitle,
        pageDescription
      }
    }
  `;

  const messages = await client.request(query);

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
