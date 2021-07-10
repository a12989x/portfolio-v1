import { useMediaQuery } from '@chakra-ui/react';

const useMediaQueries = () => {
	const [isMobileSize] = useMediaQuery('(max-width: 479px)');
	const [isExtraLargeSize] = useMediaQuery('(min-width: 1200px)');

	return { isMobileSize, isExtraLargeSize };
};

export default useMediaQueries;
