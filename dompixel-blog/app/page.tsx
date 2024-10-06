"use client";

import React from "react";

import RecentPostComponent from "@organisms/post-recent-section/post-recent";
import CardsSectionComponent from "@organisms/cards/cards";

import dataPost from "@utils/data";
import { Post } from "@utils/types";

const HomePage: React.FC = () => {
  const filteredPosts: Post[] = dataPost.filter(
    (post): post is Post => post.title !== undefined
  );

  return (
    <div className="flex flex-col w-full bg-brand-secondary-10">
      <RecentPostComponent posts={filteredPosts} />
      <CardsSectionComponent title="Most popular posts" posts={filteredPosts} />
    </div>
  );
};

export default HomePage;
