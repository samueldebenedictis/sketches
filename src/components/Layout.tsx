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
      <div className="relative">
        <div className="absolute" divSize="20vw"></div>
        <div as="main" direction="column" minH="100vh">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
