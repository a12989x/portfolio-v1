import Link from '@/components/Link';
import useColorModeValues from '@/utils/hooks/useColorModeValues';
import { Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { format } from 'date-fns';

const BlogItem = ({ title, summary, slug, publishedAt }) => {
	const textColor = useColorModeValue('neutral.800', 'neutral.200');
	const { blackColor } = useColorModeValues();

	return (
		<Link
			href={`/blog/${slug}`}
			mb={8}
			display='inline-block'
			color={blackColor}
			_hover={{ color: 'primary.500', textDecoration: 'none' }}
		>
			<Grid
				gridTemplate={{ base: '1fr auto / 1fr', md: '1fr / 1fr auto' }}
				columnGap={2}
				mb={2}
			>
				<Heading as='h4' size='md'>
					{title}
				</Heading>

				<Text>{format(publishedAt, 'MMM DD, YYYY')}</Text>
			</Grid>
			<Text color={textColor}>{summary}</Text>
		</Link>
	);
};

export default BlogItem;
