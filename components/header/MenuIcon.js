import useColorModeValues from '@/hooks/useColorModeValues';
import { Box } from '@chakra-ui/layout';

const MenuIcon = ({ isOpen }) => {
	const { inverseColor } = useColorModeValues();

	return (
		<Box w='100%' h='100%' position='relative'>
			<Line
				left={isOpen ? '8px' : '4px'}
				bg={inverseColor}
				top={isOpen ? '22px' : '16px'}
				transform={isOpen ? 'rotate(45deg)' : 'none'}
				width={isOpen ? '32px' : '40px'}
			/>
			<Line
				right={isOpen ? '8px' : '4px'}
				transform={isOpen ? 'rotate(-45deg)' : 'none'}
				bg={inverseColor}
				bottom={isOpen ? '22px' : '16px'}
				width={isOpen ? '32px' : '16px'}
			/>
		</Box>
	);
};

export default MenuIcon;

const Line = ({ ...props }) => {
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
