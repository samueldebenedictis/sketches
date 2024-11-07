import Head from 'next/head';
import { FC, ReactElement } from 'react';

export interface LayoutProps {
  children?: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;
