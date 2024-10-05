"use client";
import CardsSectionComponent from '@/app/componenets/organisms/cards/cards';
import PostSectionComponent from '@/app/componenets/organisms/post-section/post-section';
import { NextPage } from 'next';

import dataPost from "@utils/data";
import CreatePostComponent from '@/app/componenets/molecules/create-post/create-post';

const Panel: NextPage = () => {
  return (
    <div>
      <CreatePostComponent/>
      <CardsSectionComponent title="Most recent" posts={dataPost}/>
    </div>
  );
};

export default Panel;
