import { github, linkedin, twitter, youtube } from '@/data/socials';
import { HStack } from '@chakra-ui/layout';

import SocialLink from './SocialLink';

const MobileLinks = () => {
  return (
    <HStack as='ul' spacing={8}>
      <SocialLink
        color={github.color}
        icon={github.icon}
        href={github.href}
        name={github.name}
        isMobile
      />
      <SocialLink
        color={linkedin.color}
        icon={linkedin.icon}
        href={linkedin.href}
        name={linkedin.name}
        isMobile
      />
      <SocialLink
        color={twitter.color}
        icon={twitter.icon}
        href={twitter.href}
        name={twitter.name}
        isMobile
      />
      <SocialLink
        color={youtube.color}
        icon={youtube.icon}
        href={youtube.href}
        name={youtube.name}
        isMobile
      />
    </HStack>
  );
};

export default MobileLinks;
