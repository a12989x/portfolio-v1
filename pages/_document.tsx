import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
	DocumentInitialProps,
} from 'next/document';
import { ColorModeScript } from '@chakra-ui/color-mode';

import theme from '@/styles/theme';

/**
 * MyDocument: Custom Document
 * @return {JSX.Element} The JSX Code for the custom Document component
 */
class MyDocument extends Document {
	/**
	 * getInitialProps: Obtain initial props
	 * @param {Object} ctx - context
	 * @return {DocumentInitialProps} initialProps
	 */
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps: DocumentInitialProps =
			await Document.getInitialProps(ctx);

		return { ...initialProps };
	}

	/**
	 * Document: Custom Document
	 * @return {JSX.Element} Custom JSX
	 */
	render(): JSX.Element {
		return (
			<Html>
				<Head />
				<body>
					<ColorModeScript
						initialColorMode={theme.config.initialColorMode}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
