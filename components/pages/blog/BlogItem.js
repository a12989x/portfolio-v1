import Link from '@/components/Link';
import useColorModeValues from '@/utils/hooks/useColorModeValues';
import { Heading, Text, useColorModeValue } from '@chakra-ui/react';

const BlogItem = ({ title, summary, slug }) => {
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
			<Heading as='h4' size='md' mb={2}>
				{title}
			</Heading>
			<Text color={textColor}>{summary}</Text>
		</Link>
	);
};

export default BlogItem;
