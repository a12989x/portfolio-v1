import { Flex, Heading, Text } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

import { pageContainer } from '@/animations/pages';

import Seo from '@/components/Seo';
import ContainerWrapper from '@/components/ContainerWrapper';

const FlexBox = motion(Flex);

/**
 * Uses: Uses page will contain information about what software and hardware I currently use day-to-day.
 * @return {JSX.Element} The JSX Code for the Uses page component
 */
const Uses = () => {
  return (
    <FlexBox
      as='main'
      direction='column'
      align='center'
      justify='center'
      variants={pageContainer}
      initial='hidden'
      animate='show'
    >
      <Seo name='Uses 🔌' path='/uses' />

      <ContainerWrapper>
        <Heading as='h1' size='xl'>
          Uses 🔌
        </Heading>
        <Text mb='1rem'>
          This page will contain information about what software and hardware I
          currently use day-to-day.
        </Text>
      </ContainerWrapper>
    </FlexBox>
  );
};

export default Uses;
