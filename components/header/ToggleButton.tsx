import { IconButton } from '@chakra-ui/button';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { useColorMode } from '@chakra-ui/color-mode';

const ToggleButton = (): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			borderRadius='sm'
			variant='icon'
			onClick={toggleColorMode}
			aria-label={
				colorMode === 'light' ? 'Toggle dark mode' : 'Toggle light Mode'
			}
			icon={
				colorMode === 'light' ? (
					<MoonIcon size={6} />
				) : (
					<SunIcon size='1.25rem' />
				)
			}
		/>
	);
};

export default ToggleButton;
