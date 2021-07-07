import '../styles/globals.css';
import Nav from '../src/components/Nav';
import wrapper from '../redux/store/index';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />;
    </>
  );
};

export default wrapper.withRedux(MyApp);
