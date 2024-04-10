import React from 'react';

import classes from './post-grid.module.css';
import PostItem from './post-item';
import { Post } from '@/models/post.model';

type Props = {
  posts: Post[];
};

const PostGrid: React.FC<Props> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
