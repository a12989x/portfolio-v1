import { Divider, VStack } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

import NavItem from './NavItem';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: 0.3,
    },
  },
};

const VStackBox = motion(VStack);

const MobileNav = ({ toggleMenu }) => {
  return (
    <VStackBox
      as='nav'
      spacing={4}
      align='flex-end'
      // initial={{
      // 	x: 100,
      // 	opacity: 0,
      // 	transition: { staggerChildren: 5 },
      // }}
      animate={{ x: 0, opacity: 1 }}
    >
      <VStackBox
        as='ul'
        p={4}
        my={8}
        spacing={8}
        align='flex-end'
        variants={container}
        initial='hidden'
        animate='show'
      >
        <NavItem href='/' variant='large' onClick={toggleMenu}>
          Home
        </NavItem>
        <NavItem href='/about' variant='large' onClick={toggleMenu}>
          About
        </NavItem>
        <NavItem href='/projects' variant='large' onClick={toggleMenu}>
          Projects
        </NavItem>
        <NavItem href='/blog' variant='large' onClick={toggleMenu}>
          Blog
        </NavItem>

        <Divider width='50vw' />

        <NavItem href='/snippets' variant='large' onClick={toggleMenu}>
          Snippets
        </NavItem>
        <NavItem href='/community' variant='large' onClick={toggleMenu}>
          Community
        </NavItem>
        <NavItem href='/uses' variant='large' onClick={toggleMenu}>
          Uses
        </NavItem>
      </VStackBox>
    </VStackBox>
  );
};

export default MobileNav;
