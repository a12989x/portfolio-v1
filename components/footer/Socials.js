import { VStack } from '@chakra-ui/layout';
import React from 'react';

import { github, linkedin, twitter, youtube } from '@/data/socials';

import SocialLink from './SocialLink';

const Socials = () => {
	return (
		<VStack as='ul' spacing={2} align='end'>
			<SocialLink
				href={github.href}
				name={github.name}
				icon={github.icon}
				color={github.color}
			>
				GitHub
			</SocialLink>

			<SocialLink
				href={linkedin.href}
				name={linkedin.name}
				icon={linkedin.icon}
				color={linkedin.color}
			>
				Linkedin
			</SocialLink>

			<SocialLink
				href={twitter.href}
				name={twitter.name}
				icon={twitter.icon}
				color={twitter.color}
			>
				Twitter
			</SocialLink>

			<SocialLink
				href={youtube.href}
				name={youtube.name}
				icon={youtube.icon}
				color={youtube.color}
			>
				YouTube
			</SocialLink>
		</VStack>
	);
};

export default Socials;
