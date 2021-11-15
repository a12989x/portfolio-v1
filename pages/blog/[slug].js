import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { pageContainer } from '@/animations/pages';
import { getPostBySlug, getPosts } from '@/utils/mdx';

import MDXComponents from '@/components/mdx-components';
import Information from '@/components/pages/blog/Information';
import Seo from '@/components/Seo';

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((p) => ({
    params: { slug: p.replace(/\.mdx/, '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const { mdxSource, frontMatter } = await getPostBySlug(slug);

  return { props: { mdxSource, frontMatter, slug } };
};

const BoxBox = motion(Box);

const Blog = ({ mdxSource, frontMatter, slug }) => {
  return (
    <BoxBox
      as='main'
      mx='auto'
      maxW='800px'
      w='100%'
      variants={pageContainer}
      initial='hidden'
      animate='show'
    >
      <Seo name={frontMatter.title} path={`/${slug}`} />

      <Image
        className='cover-image'
        src={frontMatter.image}
        alt='cover'
        height={420}
        width={1000}
        blurDataURL={frontMatter.imageBlur}
        placeholder='blur'
        priority
      />

      <Heading as='h1' size='2xl' mt={12} mb={20} mx='auto' maxW='container.sm'>
        {frontMatter.title}
      </Heading>

      <Information
        publishedAt={frontMatter.publishedAt}
        readingTime={frontMatter.readingTime}
      />

      <Box as='section'>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </Box>
    </BoxBox>
  );
};

export default Blog;
