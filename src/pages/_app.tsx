import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../../globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>samuel</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
