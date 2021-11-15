import { Flex, HStack } from '@chakra-ui/layout';
import React from 'react';

import NavItem from './NavItem';
import ToggleButton from './ToggleButton';

const Nav = () => {
  return (
    <HStack as='nav' spacing={{ base: 4, md: 8 }}>
      <Flex as='ul' display={{ base: 'none', sm: 'flex' }}>
        <NavItem href='/'>Home</NavItem>
        <NavItem href='/about'>About</NavItem>
        <NavItem href='/projects'>Projects</NavItem>
        <NavItem href='/blog'>Blog</NavItem>
      </Flex>

      <ToggleButton />
    </HStack>
  );
};

export default Nav;
