import React, { FC, Fragment } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '@/lib/posts-utils';
import { Post } from '@/models/post.model';
import Head from 'next/head';

type Props = {
  post: Post;
};

const PostDetailPage: FC<Props> = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  const slug = params?.slug as string;

  const postData = slug ? getPostData(slug) : {};

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
