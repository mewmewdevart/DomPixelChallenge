"use client";
import CardsSectionComponent from '@/app/componenets/organisms/cards/cards';
import PostSectionComponent from '@/app/componenets/organisms/post-section/post-section';
import { NextPage } from 'next';

import dataPost from "@utils/data";

const Post: NextPage = () => {
  return (
    <div>
      <PostSectionComponent posts={dataPost}/>
      <div className="px-40">
      <h3 className="mt-8 bg-brand-primary-10 w-[12rem] text-brand-secondary-10 pl-2 font-semi-bold">
            Most recent
      </h3>
      </div>
      <CardsSectionComponent title="Most popular posts" posts={dataPost}/>
    </div>
  );
};

export default Post;
