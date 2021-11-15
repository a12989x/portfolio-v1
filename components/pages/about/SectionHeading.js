import { Box, Heading, HStack } from '@chakra-ui/layout';

import useColorModeValues from '@/hooks/useColorModeValues';

const SectionHeading = ({ children }) => {
  const { greyColor } = useColorModeValues();

  return (
    <HStack w='100%' mb={8}>
      <Box flex='1' h='1px' bg={greyColor} />
      <Heading as='h3' px={4} textAlign='center'>
        {children}
      </Heading>
      <Box flex='1' h='1px' bg={greyColor} />
    </HStack>
  );
};

export default SectionHeading;
