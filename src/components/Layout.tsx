import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { FC, ReactElement } from 'react';

import ThemeSwitcher from './ThemeSwitcher';

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
      <Box position="relative" overflow="hidden">
        <Box position="absolute" boxSize="20vw" top={5} right={0}></Box>
        <Flex as="main" direction="column" minH="100vh">
          {children}
        </Flex>
      </Box>
    </>
  );
};

export default Layout;
