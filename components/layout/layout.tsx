import React, { Fragment, PropsWithChildren } from 'react';

import MainNavigation from './main-navigation';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
