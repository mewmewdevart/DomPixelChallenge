"use client";

import { NextPage } from 'next';

import CardsSectionComponent from '@organisms/cards/cards';
import CreatePostComponent from '@molecules/create-post/create-post';

import dataPost from "@utils/data";
import { Post } from "@utils/types";

const PanelPage: NextPage = () => {
  const filteredPosts: Post[] = dataPost.filter((post): post is Post => post.title !== undefined);

  return (
    <div>
      <CreatePostComponent />
      <CardsSectionComponent title="Most recent" posts={filteredPosts} />
    </div>
  );
};

export default PanelPage;
