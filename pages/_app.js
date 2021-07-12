import '../styles/globals.css';
import Nav from '../src/components/Nav/Nav';
import 'semantic-ui-css/semantic.min.css'
import wrapper from '../redux/store/index';
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Nav />
      <Component {...pageProps} />;
    </>
  );
};

export default wrapper.withRedux(MyApp);
