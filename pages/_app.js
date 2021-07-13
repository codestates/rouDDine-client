import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import wrapper from '../redux/store/index';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='viewport-fit=cover' />
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
