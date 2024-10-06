"use client";
import CardsSectionComponent from '@organisms/cards/cards';
import PostSectionComponent from '@organisms/post-section/post-section';
import { NextPage } from 'next';

import dataPost from "@utils/data";
import CreatePostComponent from '@molecules/create-post/create-post';

const Panel: NextPage = () => {
  return (
    <div>
      <CreatePostComponent/>
      <CardsSectionComponent title="Most recent" posts={dataPost}/>
    </div>
  );
};

export default Panel;
