import { GraphQLClient } from 'graphql-request';

const clientGraphQL = () => {
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const DatoCMSURL = process.env.DATO_CMS_URL;
  // const DatoCMSURL = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return client;
};

export default clientGraphQL;
