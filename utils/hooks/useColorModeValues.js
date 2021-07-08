import { useColorModeValue } from '@chakra-ui/color-mode';

const useColorModeValues = () => {
	const whiteColor = useColorModeValue('default.light', 'default.dark');

	const blackColor = useColorModeValue('default.dark', 'default.light');

	const greyColor = useColorModeValue('neutral.200', 'neutral.600');

	const successColor = useColorModeValue(
		'accent.successDark',
		'accent.successLight'
	);

	const errorColor = useColorModeValue(
		'accent.errorDark',
		'accent.errorLight'
	);

	return {
		whiteColor,
		blackColor,
		greyColor,
		successColor,
		errorColor,
	};
};

export default useColorModeValues;
