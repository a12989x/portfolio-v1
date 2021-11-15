import { extendTheme } from '@chakra-ui/react';

// Color mode config overrides
import config from './config';

// Global styles overrides
import styles from './styles';

// Foundational style overrides
import fonts from './foundations/fonts';
import colors from './foundations/colors';

// Component style overrides
import Button from './components/button';
import Divider from './components/divider';
import Link from './components/link';
import Text from './components/text';

const overrides = {
  config,
  styles,
  fonts,
  colors,
  components: { Button, Divider, Link, Text },
};

const theme = extendTheme(overrides);

export default theme;
