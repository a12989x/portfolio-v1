import { VStack } from '@chakra-ui/layout';

const ContainerWrapper = ({ children }) => (
  <VStack
    p={8}
    maxW='550px'
    spacing={8}
    textAlign='center'
    border='2px solid'
    borderColor='neutral.400'
    borderRadius='md'
  >
    {children}
  </VStack>
);

export default ContainerWrapper;
