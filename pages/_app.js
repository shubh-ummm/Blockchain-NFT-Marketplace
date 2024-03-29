import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

// eslint-disable-next-line import/no-unresolved
import { Navbar, Footer } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
    <Script
      src="https://kit.fontawesome.com/0808d7e8ab.js"
      crossOrigin="anonymous"
    />
  </ThemeProvider>
);

export default MyApp;
