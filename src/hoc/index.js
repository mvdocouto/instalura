/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PageWrapper from '../components/Organisms/PageWrapper';
import WebsiteGlobalProvider from '../provider/index';

export default function pageHOC(
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props) => (
    <WebsiteGlobalProvider>
      <PageWrapper
      {...pageWrapperProps}
      {...props.pageWrapperProps}
      >
        <PageComponent {...props} />
      </PageWrapper>
    </WebsiteGlobalProvider>
  );
}
