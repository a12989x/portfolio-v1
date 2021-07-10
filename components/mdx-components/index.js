/* eslint-disable react/display-name */
import {
	Code,
	Divider,
	Heading,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
} from '@chakra-ui/react';

import Link from '../Link';
import Image from './Image';

const MDXComponents = {
	h1: (props) => (
		<Heading
			as='h1'
			size='xl'
			mb={4}
			maxW='container.sm'
			mx='auto'
			{...props}
		/>
	),
	h2: (props) => (
		<Heading
			as='h2'
			size='lg'
			mt={8}
			mb={4}
			maxW='container.sm'
			mx='auto'
			{...props}
		/>
	),
	h3: (props) => (
		<Heading
			as='h3'
			size='md'
			mt={8}
			mb={4}
			maxW='container.sm'
			mx='auto'
			{...props}
		/>
	),
	h4: (props) => (
		<Heading
			as='h4'
			size='sm'
			mt={8}
			mb={4}
			maxW='container.sm'
			mx='auto'
			{...props}
		/>
	),
	h5: (props) => (
		<Heading
			as='h5'
			size='sm'
			mt={8}
			mb={4}
			maxW='container.sm'
			mx='auto'
			{...props}
		/>
	),
	h6: (props) => (
		<Heading
			as='h6'
			size='xs'
			mt={8}
			mb={4}
			maxW='container.sm'
			mx='auto'
			{...props}
		/>
	),
	a: (props) => <Link mx='auto' maxW='container.sm' {...props} />,
	p: (props) => (
		<Text
			as='p'
			mx='auto'
			maxW='container.sm'
			mt={4}
			mb={6}
			lineHeight={6}
			{...props}
		/>
	),
	inlineCode: (props) => <Code {...props} />,
	ul: (props) => (
		<UnorderedList mb={4} pl={4} mx='auto' maxW='580px' {...props} />
	),
	ol: (props) => (
		<OrderedList mb={4} pl={4} mx='auto' maxW='580px' {...props} />
	),
	li: (props) => <ListItem mx='auto' maxW='container.sm' {...props} />,
	hr: (props) => <Divider mt={14} mb={10} {...props} />,
	Link,
	OrderedList,
	UnorderedList,
	ListItem,
	Image,
};

export default MDXComponents;
