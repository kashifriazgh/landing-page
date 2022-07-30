import '../styles/globals.css';
import LayoutWrapper from '../Components/LayoutWrapper';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;
