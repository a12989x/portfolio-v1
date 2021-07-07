import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import FrontMatterInterface from './FrontMatter';

interface PostDataInterface {
	mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
	frontMatter: FrontMatterInterface;
}

export default PostDataInterface;
