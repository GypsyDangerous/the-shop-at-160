import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { GlobalStyle } from "../utils/global-styles/globalStyle";
import { SEO } from "../utils/seo/SEO";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
