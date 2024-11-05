import Head from 'next/head';
import { FC, ReactElement } from 'react';

export interface LayoutProps {
  children?: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Samuel</title>
        <link rel="icon" type="image/icon" href="/favicon.ico" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
