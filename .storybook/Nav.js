import { Button, IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';

import { Moon, Sun } from '../styles/theme/icons';

const Nav = ({ children }) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [isLarge] = useMediaQuery('(min-width: 992px)');

	return (
		<Flex p='0.5rem' justifyContent='space-between' align='center'>
			{children}
			{isLarge ? (
				<Button
					position='absolute'
					top='1rem'
					right='1rem'
					onClick={toggleColorMode}
					rightIcon={colorMode === 'light' ? <Moon /> : <Sun />}
				>
					Lights
					{colorMode === 'light' ? ' off' : ' on'}
				</Button>
			) : (
				<IconButton
					borderRadius='sm'
					variant='solid'
					onClick={toggleColorMode}
					aria-label={
						colorMode === 'light'
							? 'Toggle dark mode'
							: 'Toggle light Mode'
					}
					icon={
						colorMode === 'light' ? (
							<Moon size='1.25rem' />
						) : (
							<Sun size='1.25rem' />
						)
					}
				/>
			)}
		</Flex>
	);
};

export default Nav;
