"use client";
import CardsSectionComponent from '@/app/componenets/organisms/cards/cards';
import PostSectionComponent from '@/app/componenets/organisms/post-section/post-section';
import { NextPage } from 'next';

const Post: NextPage = () => {
  return (
    <div>
      <PostSectionComponent/>
      <div className="px-40">
      <h3 className="mt-8 bg-brand-primary-10 w-[12rem] text-brand-secondary-10 pl-2 font-semi-bold">
            Most recent
      </h3>
      </div>
      <CardsSectionComponent/>
    </div>
  );
};

export default Post;
