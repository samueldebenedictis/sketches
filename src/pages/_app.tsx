import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../../globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My new cool app</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
