import { Divider, VStack } from '@chakra-ui/layout';

import NavItem from './NavItem';

const MobileNav = ({ toggleMenu }) => {
	return (
		<VStack as='nav' spacing={4} align='flex-end'>
			<VStack as='ul' p={4} my={8} spacing={8} align='flex-end'>
				<NavItem href='/' variant='large' onClick={toggleMenu}>
					Home
				</NavItem>
				<NavItem href='/about' variant='large' onClick={toggleMenu}>
					About
				</NavItem>
				<NavItem href='/projects' variant='large' onClick={toggleMenu}>
					Projects
				</NavItem>
				<NavItem href='/blog' variant='large' onClick={toggleMenu}>
					Blog
				</NavItem>
			</VStack>

			<Divider width='50vw' />

			<VStack as='ul' p={4} my={8} spacing={8} align='flex-end'>
				<NavItem
					href='/newsletter'
					variant='large'
					onClick={toggleMenu}
				>
					Newsletter
				</NavItem>
				<NavItem href='/community' variant='large' onClick={toggleMenu}>
					Community
				</NavItem>
				<NavItem href='/uses' variant='large' onClick={toggleMenu}>
					Uses
				</NavItem>
			</VStack>
		</VStack>
	);
};

export default MobileNav;
