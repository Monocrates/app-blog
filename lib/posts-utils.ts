import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { Post } from '@/models/post.model';

const postDirectory = path.join(process.cwd(), 'posts');

export const getPostFiles = () => {
  return fs.readdirSync(postDirectory);
}

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData: Post = {
    slug: postSlug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    image: data.image,
    isFeatured: data.isFeatured,
    content: content,
  };

  return postData;
};

export const getAllPost = () => {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return sortedPosts;
};

export const getFeaturedPost = () => {
  const allPosts = getAllPost();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
