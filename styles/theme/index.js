import { extendTheme } from '@chakra-ui/react';

// Global styles overrides
import styles from './styles';

// Foundational style overrides
import fonts from './foundations/fonts';
import colors from './foundations/colors';

// Component style overrides
import Button from './components/button';
import Link from './components/link';

const overrides = { styles, fonts, colors, components: { Button, Link } };

const theme = extendTheme(overrides);

export default theme;
