"use client";

import { NextPage } from "next";

import CardsSectionComponent from "@organisms/cards/cards";
import CreatePostComponent from "@molecules/create-post/create-post";

import dataPost from "@utils/data";
import { Post } from "@utils/types";
import PostListComponent from "@molecules/post-list/post-list";

const PanelPage: NextPage = () => {
  const filteredPosts: Post[] = dataPost.filter(
    (post): post is Post => post.title !== undefined
  );

  return (
    <div>
      <div className="px-5 md:px-20 lg:px-40">
        <PostListComponent title="All posts" posts={filteredPosts} isPanel={true} />
      </div>
      <CreatePostComponent />
      <CardsSectionComponent title="Most recent" posts={filteredPosts} />
    </div>
  );
};

export default PanelPage;
