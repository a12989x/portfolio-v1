import { VStack } from '@chakra-ui/layout';

import Link from '../Link';

const LinkItem = ({ href, children }) => {
  return (
    <VStack as='li'>
      <Link href={href} variant='subtle'>
        {children}
      </Link>
    </VStack>
  );
};

export default LinkItem;
