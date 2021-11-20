const title = 'Alexis Guzman – Front-end developer';
const description =
  'Freelance font-end web developer focused on building scalable, maintainable and accessible solutions on the web.';

const SEO = {
  title,
  description,
  canonical: 'https://www.codingcodax.dev/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.codingcodax.dev/',
    title,
    description,
    images: [
      {
        url: 'https://www.codingcodax.dev/og.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@codingcodax',
    site: '@codingcodax',
    cardType: 'summary_large_image',
  },
};

export default SEO;
