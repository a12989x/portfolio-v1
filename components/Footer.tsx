import { useColorModeValue } from '@chakra-ui/color-mode';
import { Divider, HStack, Text, VStack } from '@chakra-ui/layout';

import Link from './Link';

const Footer = (): JSX.Element => {
	const color = useColorModeValue('default.dark', 'default.light');

	return (
		<VStack as='section' mt={20} spacing={10}>
			<Divider borderColor={color} />
			<HStack
				as='footer'
				w='100%'
				maxW='800px'
				align='start'
				justify='space-between'
			>
				<VStack as='section' spacing={2} align='start'>
					<Link href='/' variant='subtle' isExternal={false}>
						Home
					</Link>
					<Link href='/about' variant='subtle' isExternal={false}>
						About
					</Link>
					<Link href='/projects' variant='subtle' isExternal={false}>
						Projects
					</Link>
					<Link href='/blog' variant='subtle' isExternal={false}>
						Blog
					</Link>
				</VStack>
				<VStack as='section' spacing={2} align='center'>
					<Link
						href='/newsletter'
						variant='subtle'
						isExternal={false}
					>
						Newsletter
					</Link>
					<Link href='/community' variant='subtle' isExternal={false}>
						Community
					</Link>
					<Link href='/uses' variant='subtle' isExternal={false}>
						Uses
					</Link>
				</VStack>
				<VStack as='section' spacing={2} align='end'>
					<Link
						href='https://github.com/a12989x/'
						variant='subtle'
						isExternal={false}
					>
						GitHub
					</Link>
					<Link
						href='https://www.linkedin.com/in/codax/'
						variant='subtle'
						isExternal={false}
					>
						Linkedin
					</Link>
					<Link
						href='https://twitter.com/__codax__'
						variant='subtle'
						isExternal={false}
					>
						Twitter
					</Link>
					<Link
						href='https://www.youtube.com/channel/UCMY0GhV1HuX4XdbgalC77VQ'
						variant='subtle'
						isExternal={false}
					>
						YouTube
					</Link>
				</VStack>
			</HStack>
			<Text>Copyright © 2021 Alexis Guzman</Text>
		</VStack>
	);
};

export default Footer;
