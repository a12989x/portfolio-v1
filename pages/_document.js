import Document, { Html, Head, Main, NextScript } from 'next/document';
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
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  /**
   * Document: Custom Document
   * @return {JSX.Element} Custom JSX
   */
  render() {
    return (
      <Html>
        <Head lang='en' />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
