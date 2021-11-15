import { VStack } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

import { pageContainer } from '@/animations/pages';

import Seo from '@/components/Seo';
import Intro from '@/components/pages/about/Intro';
import Skills from '@/components/pages/about/Skills';
import Contact from '@/components/pages/about/Contact';

const VStackBox = motion(VStack);

/**
 * About: About page will contain information about my background, skill set and hobbies outside of tech.
 * @return {JSX.Element} The JSX Code for the About page component
 */
const About = () => {
  return (
    <VStackBox
      as='section'
      mx='auto'
      w='100%'
      maxW='800px'
      spacing={28}
      variants={pageContainer}
      initial='hidden'
      animate='show'
    >
      <Seo name='About 👨‍💻' path='/about' />

      <Intro />
      <Skills />
      <Contact />
    </VStackBox>
  );
};

export default About;
