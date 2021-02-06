import Head from 'next/head';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '@/tailwind.config';
import '@/styles/globals.css'
import '@/styles/custom.css';

const { theme } = resolveConfig(tailwindConfig);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content={theme.colors.white} name='theme-color' />
        <meta content={theme.colors.white} name='msapplication-TileColor' />
        <meta content='/browserconfig.xml' name='msapplication-config' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

