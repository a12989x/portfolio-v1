import Icon from '@chakra-ui/icon';
import { VStack } from '@chakra-ui/layout';
import VisuallyHidden from '@chakra-ui/visually-hidden';
import { FunctionComponent, ReactNode, useState } from 'react';
import Link from '../Link';

interface LinkProps {
	href: string;
	children?: ReactNode;
	color: string;
	icon: FunctionComponent;
	isMobile?: boolean;
	name: string;
}

const SocialLink = ({
	href,
	children,
	color,
	icon,
	isMobile = false,
	name,
}: LinkProps): JSX.Element => {
	const [isHover, setIsHover] = useState(false);

	const toggleHover = () => setIsHover((v) => !v);

	const fillColor = isHover ? color : 'currentColor';

	return (
		<VStack as='li' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
			<Link href={href} variant='subtle'>
				<Icon
					transform={isHover ? 'translateY(-4px)' : 'none'}
					transitionDuration='500ms'
					fill={fillColor}
					mr={{ sm: 2 }}
					boxSize={{ base: 6, sm: 4 }}
					aria-hidden={true}
					as={icon}
				/>
				{children}

				{isMobile && <VisuallyHidden>{name}</VisuallyHidden>}
			</Link>
		</VStack>
	);
};

export default SocialLink;
