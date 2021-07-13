import { useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

import { pageContainer } from '@/animations/pages';
import { getPostsFrontMatter } from '@/utils/mdx';

import Seo from '@/components/Seo';
import BlogItem from '@/components/pages/blog/BlogItem';
import SearchBar from '@/components/pages/blog/SearchBar';

export const getStaticProps = async () => {
	const posts = await getPostsFrontMatter();

	return { props: { posts } };
};

const VStackBox = motion(VStack);

/**
 * Blog: Blog page will contain a list of Blog I've written.
 * @return {JSX.Element} The JSX Code for the Blog page component
 */
const Blog = ({ posts }) => {
	const [searchValue, setSearchValue] = useState('');
	const filteredBlogPosts = posts
		.sort(
			(a, b) =>
				Number(new Date(b.publishedAt)) -
				Number(new Date(a.publishedAt))
		)
		.filter((frontMatter) =>
			frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
		);

	return (
		<VStackBox
			as='main'
			mx='auto'
			w='100%'
			maxW='800px'
			spacing={8}
			variants={pageContainer}
			initial='hidden'
			animate='show'
		>
			<Seo name='Blog 🖊️' path='/blog' />

			<Heading as='h1' size='2xl' mt={12} mb={20} w='100%'>
				Blog 🖊️
			</Heading>

			<SearchBar
				value={searchValue}
				handleChange={(e) => setSearchValue(e.target.value)}
			/>

			<Box as='section'>
				{filteredBlogPosts.map((post) => (
					<BlogItem key={post.title} {...post} />
				))}
			</Box>
		</VStackBox>
	);
};

export default Blog;
