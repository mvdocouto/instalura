/* eslint-disable import/prefer-default-export */
import { gql as GraphQLTag } from 'graphql-request';
import { CMSGraphQLClient } from '../../../services/DatoCMS/GraphQLClient';

export async function getContent() {
  const query = GraphQLTag`
    query {
      pagesobre{
        pageTitle,
        pageDescription
      }
    }
  `;
  const client = CMSGraphQLClient();
  const response = await client.query({ query });
  return response.data.messages;
}
