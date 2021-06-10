import { VStack } from '@chakra-ui/layout';

import Link from '../Link';

const Socials = (): JSX.Element => {
	return (
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
	);
};

export default Socials;
