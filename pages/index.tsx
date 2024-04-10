import React, { Fragment } from 'react';

import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { Post } from '@/models/post.model';
import { GetStaticProps } from 'next';
import { getFeaturedPost } from '@/lib/posts-utils';
import Head from 'next/head';

type Props = {
  posts: Post[];
};

const HomePage: React.FC<Props> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Max Blog</title>
        <meta name="description" content="I post about programming and web development." />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const featuredPosts = getFeaturedPost();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
