import Icon from '@chakra-ui/icon';
import { VStack } from '@chakra-ui/layout';
import VisuallyHidden from '@chakra-ui/visually-hidden';
import { useState } from 'react';
import Link from '../Link';

const SocialLink = ({
  href,
  children,
  color,
  icon,
  isMobile = false,
  name,
}) => {
  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => setIsHover((v) => !v);

  const fillColor = isHover ? color : 'currentColor';

  return (
    <VStack as='li' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <Link
        href={href}
        variant='subtle'
        display='flex'
        alignItems='center'
        isExternal
      >
        <Icon
          transform={isHover ? 'translateY(-4px)' : 'none'}
          transitionDuration='500ms'
          fill={fillColor}
          mr={{ sm: 2 }}
          boxSize={{ base: 6, sm: 4 }}
          aria-hidden={true}
          as={icon}
        />
        {children}

        {isMobile && <VisuallyHidden>{name}</VisuallyHidden>}
      </Link>
    </VStack>
  );
};

export default SocialLink;
