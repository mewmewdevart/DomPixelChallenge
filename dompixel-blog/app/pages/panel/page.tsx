"use client";

import { NextPage } from 'next';
import CardsSectionComponent from '@organisms/cards/cards';
import CreatePostComponent from '@molecules/create-post/create-post';

import dataPost from "@utils/data";

const Panel: NextPage = () => {
  return (
    <div>
      <CreatePostComponent/>
      <CardsSectionComponent title="Most recent" posts={dataPost}/>
    </div>
  );
};

export default Panel;
