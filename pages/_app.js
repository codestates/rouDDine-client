import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import wrapper from '../redux/store/index';
import HeadInfo from '../src/components/HeadInfo/HeadInfo';
import Nav from '../src/components/Nav/Nav';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <Head>
        <meta name='viewport' content='viewport-fit=cover' />
      </Head>
      <Nav />
      <HeadInfo />
      <Component {...pageProps} />;
      </ParallaxProvider>
  );
};

export default wrapper.withRedux(MyApp);
