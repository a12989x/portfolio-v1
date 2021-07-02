import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import IReadTimeResults from './IReadTimeResults';

interface PostDataInterface {
	mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
	frontMatter: {
		wordCount: number;
		readingTime: IReadTimeResults;
		title?: string;
	};
}

export default PostDataInterface;
