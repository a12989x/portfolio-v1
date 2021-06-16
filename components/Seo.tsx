import { NextSeo } from 'next-seo';

const Seo = ({ name, path }: { name: string; path: string }): JSX.Element => {
	const title = `${name} | Alexis Guzman`;
	const url = `https://codaxx.ml${path}`;

	return (
		<NextSeo
			title={title}
			canonical={url}
			openGraph={{
				url,
				title,
			}}
		/>
	);
};

export default Seo;
