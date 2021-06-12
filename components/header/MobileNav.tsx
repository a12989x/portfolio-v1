import { Divider, VStack } from '@chakra-ui/layout';

import NavItem from './NavItem';

const MobileNav = (): JSX.Element => {
	return (
		<VStack as='nav' spacing={4} align='flex-end'>
			<VStack as='ul' p={4} my={8} spacing={8} align='flex-end'>
				<NavItem href='/' variant='large'>
					Home
				</NavItem>
				<NavItem href='/about' variant='large'>
					About
				</NavItem>
				<NavItem href='/projects' variant='large'>
					Projects
				</NavItem>
				<NavItem href='/blog' variant='large'>
					Blog
				</NavItem>
			</VStack>

			<Divider borderColor='neutral.200' width='50vw' />

			<VStack as='ul' p={4} my={8} spacing={8} align='flex-end'>
				<NavItem href='/newsletter' variant='large'>
					Newsletter
				</NavItem>
				<NavItem href='/community' variant='large'>
					Community
				</NavItem>
				<NavItem href='/uses' variant='large'>
					Uses
				</NavItem>
			</VStack>
		</VStack>
	);
};

export default MobileNav;
