/* eslint-disable import/prefer-default-export */
import { GraphQLClient } from 'graphql-request';

export function CMSGraphQLClient() {
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const DatoCMSURL = process.env.DATO_CMS_URL;

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return {
    async query({ query }) {
      const messages = await client.request(query);
      return {
        data: {
          messages,
        },
      };
    },
  };
}
