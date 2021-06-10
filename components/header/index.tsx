import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Icon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, HStack } from '@chakra-ui/layout';

import { LogoIcon } from '@/styles/theme/icons';
import NavItem from './NavItem';

const Header = (): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex as='header' pt={4} mb={5} justify='space-between'>
			<Icon as={LogoIcon} boxSize={10} />
			<HStack as='nav' spacing={8}>
				<Flex as='ul' display={{ base: 'none', lg: 'flex' }}>
					<NavItem href='/'>Home</NavItem>
					<NavItem href='/about'>About</NavItem>
					<NavItem href='/projects'>Projects</NavItem>
					<NavItem href='/blog'>Blog</NavItem>
				</Flex>

				<IconButton
					borderRadius='sm'
					variant='icon'
					onClick={toggleColorMode}
					aria-label={
						colorMode === 'light'
							? 'Toggle dark mode'
							: 'Toggle light Mode'
					}
					icon={
						colorMode === 'light' ? (
							<MoonIcon size='1.25rem' />
						) : (
							<SunIcon size='1.25rem' />
						)
					}
				/>
			</HStack>
		</Flex>
	);
};

export default Header;
