/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PageWrapper from '../components/Organisms/PageWrapper';
import WebsiteGlobalProvider from '../provider/index';

export default function pageHOC(PageComponent, { pageWrapperProps }) {
  return (props) => (
    <WebsiteGlobalProvider>
      <PageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </PageWrapper>
    </WebsiteGlobalProvider>
  );
}
