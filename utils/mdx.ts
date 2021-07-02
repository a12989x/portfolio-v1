import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
// @ts-expect-error: Could not find a declaration file for module 'mdx-prism'.
import mdxPrism from 'mdx-prism';
import PostDataInterface from '@/interfaces/PostDataInterface';

export const POSTS_PATH = path.join(process.cwd(), 'data/blog');

export const getPosts = async (): Promise<string[]> => readdirSync(POSTS_PATH);

export const getPostBySlug = async (
	slug: string
): Promise<PostDataInterface> => {
	const source = readFileSync(`${POSTS_PATH}/${slug}.mdx`, 'utf8');

	const { data, content } = matter(source);
	const mdxSource = await serialize(content, {
		mdxOptions: { remarkPlugins: [], rehypePlugins: [mdxPrism] },
	});

	return {
		mdxSource,
		frontMatter: {
			wordCount: content.split(/\s+/gu).length,
			readingTime: readingTime(content),
			...data,
		},
	};
};
