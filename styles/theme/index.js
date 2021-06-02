import { extendTheme } from '@chakra-ui/react';

// Global styles overrides
import styles from './styles';

// Foundational style overrides
import fonts from './foundations/fonts';
import textStyles from './foundations/textStyles';
import colors from './foundations/colors';

// Component style overrides
import Button from './components/button';
import Link from './components/link';
import Text from './components/text';

const overrides = {
	styles,
	fonts,
	textStyles,
	colors,
	components: { Button, Link, Text },
};

const theme = extendTheme(overrides);

export default theme;
