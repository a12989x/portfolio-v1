import { IconButton } from '@chakra-ui/button';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { useColorMode } from '@chakra-ui/color-mode';

const ToggleButton = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			borderRadius='sm'
			onClick={toggleColorMode}
			aria-label={
				colorMode === 'light' ? 'Toggle dark mode' : 'Toggle light Mode'
			}
			icon={
				colorMode === 'light' ? (
					<MoonIcon size={6} />
				) : (
					<SunIcon size={6} />
				)
			}
		/>
	);
};

export default ToggleButton;
