const title = 'Alexis Guzman – Front-end developer';
const description =
	'Freelance font-end web developer focused on building scalable, maintainable and accessible solutions on the web.';

const SEO = {
	title,
	description,
	canonical: 'https://codaxx.ml',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://codaxx.ml',
		title,
		description,
		images: [
			{
				url: 'https://fastfeedback.io/og.png',
				alt: title,
				width: 1280,
				height: 720,
			},
		],
	},
	twitter: {
		handle: '@__codax__',
		site: '@__codax__',
		cardType: 'summary_large_image',
	},
};

export default SEO;
