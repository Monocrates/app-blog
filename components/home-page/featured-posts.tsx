import React from 'react';

import classes from './featured-post.module.css';
import PostGrid from '../posts/post-grid';
import { Post } from '@/models/post.model';

type Props = {
  posts: Post[];
};

const FeaturedPosts: React.FC<Props> = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
