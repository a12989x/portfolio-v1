import { useColorModeValue } from '@chakra-ui/color-mode';

const useColorModeValues = () => {
  const inverseColor = useColorModeValue('default.dark', 'default.light');
  const bgColor = useColorModeValue('default.light', 'default.dark');
  const greyColor = useColorModeValue('neutral.200', 'neutral.600');

  const successColor = useColorModeValue(
    'accent.successDark',
    'accent.successLight'
  );

  const errorColor = useColorModeValue('accent.errorDark', 'accent.errorLight');

  /* ────────────────────────────────────────────────────── */

  return {
    inverseColor,
    bgColor,
    greyColor,
    successColor,
    errorColor,
  };
};

export default useColorModeValues;
