import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import theme from '@/styles/theme';
import Layout from '@/components/Layout';
import Head from '@/components/Head';

const progress = new ProgressBar({
  size: 2,
  color: '#805AD5',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Head />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
