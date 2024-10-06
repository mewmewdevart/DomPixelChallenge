"use client";

import React from 'react';
import { NextPage } from 'next';

import CardsSectionComponent from '@organisms/cards/cards';
import PostSectionComponent from '@organisms/post-section/post-section';

import dataPost from "@utils/data";

const PostPage: NextPage = () => {
  return (
    <>
      <section>
        <PostSectionComponent posts={dataPost} />
        
        <section className="px-5 md:px-20 lg:px-40 py-6">
          <h3 className="mt-8 bg-brand-primary-10 w-fit text-brand-secondary-10 pl-2 font-semibold">
            Most Recent
          </h3>
        </section>
        
        <CardsSectionComponent title="Most Popular Posts" posts={dataPost} />
      </section>
    </>
  );
};

export default PostPage;
