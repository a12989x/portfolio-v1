import NextHead from 'next/head';

const Head = (): JSX.Element => {
	return (
		<NextHead>
			<meta charSet='UTF-8' />
			<link rel='icon' href='' />
			<title>Alexis Guzman - Front-end developer</title>
			<meta
				name='description'
				content='Freelance font-end web developer focused on building scalable, maintainable and accessible solutions on the web.'
			/>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
		</NextHead>
	);
};

export default Head;
