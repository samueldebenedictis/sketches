import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import theme from 'theme/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
