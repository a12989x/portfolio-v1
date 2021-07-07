/* eslint-disable react/display-name */
import {
	Code,
	CodeProps,
	Divider,
	DividerProps,
	Heading,
	HeadingProps,
	ListItem,
	ListItemProps,
	ListProps,
	OrderedList,
	Text,
	TextProps,
	UnorderedList,
} from '@chakra-ui/react';

import LinkInterface from '@/interfaces/Link';

import Link from '../Link';
import Image from './Image';

const MDXComponents = {
	h1: (props: HeadingProps): JSX.Element => (
		<Heading
			as='h1'
			size='xl'
			mb={4}
			maxW='container.sm'
			mx='auto'
			{...props}
		/>
	),
	h2: (props: HeadingProps): JSX.Element => (
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
	h3: (props: HeadingProps): JSX.Element => (
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
	h4: (props: HeadingProps): JSX.Element => (
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
	h5: (props: HeadingProps): JSX.Element => (
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
	h6: (props: HeadingProps): JSX.Element => (
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
	a: (props: LinkInterface): JSX.Element => (
		<Link mx='auto' maxW='container.sm' {...props} />
	),
	p: (props: TextProps): JSX.Element => (
		<Text
			as='p'
			mx='auto'
			maxW='container.sm'
			mb={4}
			lineHeight={5}
			{...props}
		/>
	),
	inlineCode: (props: CodeProps): JSX.Element => <Code {...props} />,
	ul: (props: ListProps): JSX.Element => (
		<UnorderedList mb={4} pl={4} mx='auto' maxW='580px' {...props} />
	),
	ol: (props: ListProps): JSX.Element => (
		<OrderedList mb={4} pl={4} mx='auto' maxW='580px' {...props} />
	),
	li: (props: ListItemProps): JSX.Element => (
		<ListItem mx='auto' maxW='container.sm' {...props} />
	),
	hr: (props: DividerProps): JSX.Element => (
		<Divider borderColor='neutral.200' mt={14} mb={10} {...props} />
	),
	Link,
	OrderedList,
	UnorderedList,
	ListItem,
	Image,
};

export default MDXComponents;
