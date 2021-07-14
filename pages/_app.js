import '../styles/globals.css';
import wrapper from '../redux/store/index';
import { ParallaxProvider } from 'react-scroll-parallax'; //패럴렉스-스크롤
import '@fortawesome/fontawesome-svg-core/styles.css'; //폰트어썸
import { config } from '@fortawesome/fontawesome-svg-core'; //폰트어썸
config.autoAddCss = false; //폰트어썸

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
