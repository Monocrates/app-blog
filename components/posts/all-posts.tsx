import React from 'react';

import classes from './all-posts.module.css';
import PostGrid from './post-grid';
import { Post } from '@/models/post.model';

type Props = {
  posts: Post[];
};

const AllPosts: React.FC<Props> = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
