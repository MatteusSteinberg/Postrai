import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/style.scss';
import "aos/dist/aos.css";
import AOS from 'aos'
import { TransitionGroup } from "react-transition-group";

import { SessionProvider } from 'next-auth/react';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>

  );
}
