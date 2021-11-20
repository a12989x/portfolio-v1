import Router, { useRouter } from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from 'kbar';

import SEO from '../next-seo.config';

import theme from '@/styles/theme';
import Layout from '@/components/Layout';
import Head from '@/components/Head';
import RenderResults from '@/components/kbar/RenderResults';
import styles from '@/components/kbar/styles';
import { HomeIcon } from '@/styles/theme/icons';

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
  const router = useRouter();
  const { search, animator } = styles;

  return (
    <KBarProvider
      actions={[
        {
          id: 'homeAction',
          name: 'Home',
          shortcut: ['h'],
          keywords: 'back',
          section: 'Navigation',
          perform: () => router.push('/'),
          icon: <HomeIcon />,
          subtitle: 'A small introduction of me and my work',
        },
        {
          id: 'aboutAction',
          name: 'About',
          shortcut: ['a'],
          keywords: 'contact',
          section: 'Navigation',
          perform: () => router.push('/about'),
        },
        {
          id: 'projectsAction',
          name: 'Projects',
          shortcut: ['p'],
          keywords: 'work',
          section: 'Navigation',
          perform: () => router.push('/projects'),
        },
        {
          id: 'blogAction',
          name: 'Blog',
          shortcut: ['b'],
          keywords: 'post articles',
          section: 'Navigation',
          perform: () => router.push('/blog'),
        },
        {
          id: 'githubAction',
          name: 'GitHub',
          shortcut: ['g', 'h'],
          keywords: 'sourcecode',
          section: 'Socials',
          perform: () =>
            window.open('https://github.com/codingcodax', '_blank'),
        },
        {
          id: 'linkedinAction',
          name: 'Likedin',
          shortcut: ['l'],
          keywords: 'social contact dm',
          section: 'Socials',
          perform: () =>
            window.open('https://www.linkedin.com/in/codax/', '_blank'),
        },
        {
          id: 'twitterAction',
          name: 'Twitter',
          shortcut: ['t'],
          keywords: 'social contact dm',
          section: 'Socials',
          perform: () =>
            window.open('https://twitter.com/codingcodax', '_blank'),
        },
        {
          id: 'youtubeAction',
          name: 'YouTube',
          shortcut: ['y', 't'],
          keywords: 'videos',
          section: 'Socials',
          perform: () =>
            window.open(
              'https://www.youtube.com/channel/UCMY0GhV1HuX4XdbgalC77VQ/videos',
              '_blank'
            ),
        },
        {
          id: 'contactAction',
          name: 'Contact',
          shortcut: ['c'],
          keywords: 'email hello',
          section: '',
          perform: () => window.open('mailto:codaxtech@gmail.com', '_blank'),
          parent: 'aboutAction',
        },
      ]}
    >
      <ChakraProvider resetCSS theme={theme}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator style={animator}>
              <KBarSearch style={search} />
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>

        <Layout>
          <Head />
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </KBarProvider>
  );
};

export default MyApp;
