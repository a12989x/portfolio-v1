import useColorModeValues from '@/utils/hooks/useColorModeValues';
import { Box } from '@chakra-ui/layout';

const MenuIcon = ({ isOpen }: { isOpen: boolean }): JSX.Element => {
	const { blackColor } = useColorModeValues();

	return (
		<Box w='100%' h='100%' position='relative'>
			<Line
				left={isOpen ? '8px' : '4px'}
				bg={blackColor}
				top={isOpen ? '22px' : '16px'}
				transform={isOpen ? 'rotate(45deg)' : 'none'}
				width={isOpen ? '32px' : '40px'}
			/>
			<Line
				right={isOpen ? '8px' : '4px'}
				transform={isOpen ? 'rotate(-45deg)' : 'none'}
				bg={blackColor}
				bottom={isOpen ? '22px' : '16px'}
				width={isOpen ? '32px' : '16px'}
			/>
		</Box>
	);
};

export default MenuIcon;

const Line = ({ ...props }): JSX.Element => {
	return (
		<Box
			{...props}
			borderRadius='1px'
			as='span'
			position='absolute'
			height='4px'
			transition='all 0.3s ease-in-out'
		/>
	);
};
