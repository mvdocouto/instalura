import React from 'react';
import pageHOC from '../../src/hoc';

function ProfilePage() {
  return (
    <div>
      Página de Profile!
      <img src="https://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif" alt="Nicolas Cage" />
    </div>
  );
}

export default pageHOC(ProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile',
    },
    menuProps: {
      display: true,
    },
  },
});
