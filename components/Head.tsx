import NextHead from 'next/head';

const Head = (): JSX.Element => {
	return (
		<NextHead>
			<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
			<meta
				content='width=device-width, initial-scale=1'
				name='viewport'
			/>
			<meta content='#8d1ffc' name='theme-color' />
			<meta content='#ffffff' name='msapplication-TileColor' />
			<meta
				content='/favicons/browserconfig.xml'
				name='msapplication-config'
			/>
			<link href='/favicons/favicon.ico' rel='shortcut icon' />
			<link href='/favicons/site.webmanifest' rel='manifest' />
			<link
				href='/favicons/apple-touch-icon.png'
				rel='apple-touch-icon'
				sizes='180x180'
			/>
			<link
				href='/favicons/favicon-32x32.png'
				rel='icon'
				sizes='32x32'
				type='image/png'
			/>
			<link
				href='/favicons/favicon-16x16.png'
				rel='icon'
				sizes='16x16'
				type='image/png'
			/>
		</NextHead>
	);
};

export default Head;
