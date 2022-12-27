import '../styles.scss';
import Layout from '../components/layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel='icon' href='/icon.png' key='favicon' />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
