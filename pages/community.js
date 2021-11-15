import { Flex, Heading, Text } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

import { pageContainer } from '@/animations/pages';

import Seo from '@/components/Seo';
import ContainerWrapper from '@/components/ContainerWrapper';

const FlexBox = motion(Flex);

/**
 * Community: Community page will contain information about inspirations behind the design/code solutions of this site, as well as contributors.
 * @return {JSX.Element} The JSX Code for the Community page component
 */
const Community = () => {
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
      <Seo name='Community 🌍' path='/community' />

      <ContainerWrapper>
        <Heading as='h1' size='xl'>
          Community 🌍
        </Heading>
        <Text mb='1rem'>
          This page will contain information about inspirations behind the
          design/code solutions of this site, as well as contributors.
        </Text>
      </ContainerWrapper>
    </FlexBox>
  );
};

export default Community;
