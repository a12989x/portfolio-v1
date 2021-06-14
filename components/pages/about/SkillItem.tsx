import { FunctionComponent, useState } from 'react';
import { GridItem } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';

interface SkillItemInterface {
	name: string;
	icon: FunctionComponent;
	color: string;
}

const SkillItem = ({ name, icon, color }: SkillItemInterface): JSX.Element => {
	const [isHover, setIsHover] = useState(false);

	const toggleHover = () => setIsHover((v) => !v);

	const fillColor = isHover ? color : 'currentColor';

	return (
		<GridItem
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			p={{ base: '0.5rem', '2xl': '1rem' }}
			textAlign='center'
			alignContent='center'
			display='flex'
			flexDirection='column'
			listStyleType='none'
			as='li'
		>
			<Icon
				mx='auto'
				mb='0.5rem'
				boxSize={{ base: '2rem', lg: '3rem', '2xl': '4rem' }}
				as={icon}
				fill={fillColor}
				transitionDuration='500ms'
			/>
			{name}
		</GridItem>
	);
};

export default SkillItem;
