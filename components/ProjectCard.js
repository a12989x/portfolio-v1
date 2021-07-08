import {
	Box,
	Center,
	Grid,
	Heading,
	HStack,
	List,
	ListItem,
	Text,
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';

import useColorModeValues from '@/utils/hooks/useColorModeValues';

const ProjectCard = ({ logo, title, description, tools, live, repo }) => {
	const { blackColor, whiteColor, greyColor } = useColorModeValues();

	return (
		<Box
			as='li'
			w='100%'
			maxW={{ base: '100%', md: '500px' }}
			listStyleType='none'
			border='1px solid'
			borderColor={greyColor}
		>
			<Center borderRadius={0} fill={whiteColor} h='8rem' bg={blackColor}>
				<Icon
					aria-label='logo'
					boxSize={12}
					as={logo}
					color={whiteColor}
				/>
			</Center>

			<Grid
				as='section'
				pt={16}
				pb={8}
				px={8}
				gridTemplateRows={{ base: 'auto', sm: 'auto 2fr auto 1fr' }}
				gap={4}
			>
				<Heading as='h3'>{title}</Heading>
				<Text mb={{ base: 4, md: 0 }}>{description}</Text>

				<List display='flex' flexDirection='row'>
					{tools.map(({ id, name, icon, color }) => (
						<ListItem key={id} p={2}>
							<Icon
								aria-label={name}
								transitionDuration='300ms'
								boxSize={6}
								as={icon}
								_hover={{ fill: color }}
							/>
						</ListItem>
					))}
				</List>

				<HStack>
					{live && (
						<Button as='a' href={live} variant='primaryOutline'>
							Visit Site
						</Button>
					)}
					<Button as='a' href={repo} variant='outline'>
						View Code
					</Button>
				</HStack>
			</Grid>
		</Box>
	);
};

export default ProjectCard;
