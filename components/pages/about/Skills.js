import * as tools from '@/data/tools';
import { Box, Grid, Text } from '@chakra-ui/layout';

import SectionHeading from './SectionHeading';
import SkillItem from './SkillItem';

const Skills = () => {
	const skills = Object.values(tools);

	return (
		<Box w='100%' as='section'>
			<SectionHeading>Tools & Technologies</SectionHeading>

			<Text mb={32} mx='auto' maxW='container.sm'>
				One of my favorite things since I starting to learn to code has
				been to see all of the amazing tools other humans have created
				to make other humans’ lives easier. Here are some of the tools I
				utilise most regularly.
			</Text>

			<Grid
				as='ul'
				mx='auto'
				maxW='container.sm'
				templateColumns={{
					base: 'repeat(2, 1fr)',
					sm: 'repeat(3, 1fr)',
					md: 'repeat(4, 1fr)',
				}}
				gap={6}
			>
				{skills.map((skill) => (
					<SkillItem
						name={skill.name}
						icon={skill.icon}
						color={skill.color}
						key={skill.id}
					/>
				))}
			</Grid>
		</Box>
	);
};

export default Skills;
