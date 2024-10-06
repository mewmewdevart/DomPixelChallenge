"use client";

import React from "react";
import { NextPage } from "next";

import CardsSectionComponent from "@organisms/cards/cards";
import PostSectionComponent from "@organisms/post-section/post-section";

import dataPost from "@utils/data";
import { Post } from "@utils/types";

const PostPage: NextPage = () => {
  const filteredPosts: Post[] = dataPost.filter(
    (post): post is Post =>
      post.title !== undefined &&
      post.shortDescription !== undefined &&
      post.author !== undefined
  );

  return (
    <>
      <section>
        <PostSectionComponent posts={filteredPosts} />
        <section className="px-5 md:px-20 lg:px-40 py-6">
          <h3 className="mt-8 bg-brand-primary-10 w-[12rem] text-brand-secondary-10 pl-2 font-semi-bold">
            Most Recent
          </h3>
        </section>
        <CardsSectionComponent
          title="Most Popular Posts"
          posts={filteredPosts}
        />
      </section>
    </>
  );
};

export default PostPage;
