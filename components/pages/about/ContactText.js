import { Box, Text } from '@chakra-ui/layout';

import Link from '@/components/Link';

const ContactText = () => {
  return (
    <Box>
      <Text mb={2} fontWeight='bold'>
        Let{"'"}s chat!
      </Text>

      <Text mb={4}>
        If you have any questions, opportunities or would just like to say hey
        then feel free to fill out my contact form and I{"'"}ll endeavour to get
        back to you as soon as I can.
      </Text>

      <Text mb={4}>
        Or if you would prefer to, you can also reach me on{' '}
        <Link href='https://twitter.com/codingcodax' isExternal>
          twitter
        </Link>{' '}
        and{' '}
        <Link href='https://www.linkedin.com/in/codax/' isExternal>
          linkedin
        </Link>
        .
      </Text>
    </Box>
  );
};

export default ContactText;
