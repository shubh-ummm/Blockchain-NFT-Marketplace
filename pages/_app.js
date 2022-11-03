import { ThemeProvider } from 'next-themes';



import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  </ThemeProvider>
);

export default MyApp;
