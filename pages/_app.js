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
        <meta name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
