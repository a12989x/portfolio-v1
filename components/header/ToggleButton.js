import { IconButton } from '@chakra-ui/button';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useColorMode } from '@chakra-ui/color-mode';

const MoonIconBox = motion(MoonIcon);
const SunIconBox = motion(SunIcon);

const ToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter>
      <IconButton
        borderRadius='sm'
        onClick={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'Toggle dark mode' : 'Toggle light Mode'
        }
        icon={
          colorMode === 'light' ? (
            <MoonIconBox
              size={6}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
            />
          ) : (
            <SunIconBox
              size={6}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
            />
          )
        }
      />
    </AnimatePresence>
  );
};

export default ToggleButton;
