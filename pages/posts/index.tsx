import React, { Fragment } from 'react';

import AllPosts from '@/components/posts/all-posts';
import { Post } from '@/models/post.model';
import { GetStaticProps } from 'next';
import { getAllPost } from '@/lib/posts-utils';
import Head from 'next/head';

type Props = {
  posts: Post[];
};

const AllPostsPage: React.FC<Props> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related tutorials and posts!" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPost();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
