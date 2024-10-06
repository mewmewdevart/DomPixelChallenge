import React from "react";

import Banner from "@organisms/banner/banner";
import PostListComponent from "@molecules/post-list/post-list";

import { Post } from "@utils/types";

interface RecentPostProps {
  posts: Post[];
}

const RecentPostComponent: React.FC<RecentPostProps> = ({ posts }) => {
  const latestPost = posts[0];
  const recentPosts = posts.slice(1, 5);

  return (
    <div className="relative w-full h-fit px-5 md:px-20 lg:px-40 flex flex-col gap-4">
      <h2 className="mt-1 md:mt-2 lg:mt-4 font-semibold">Recent blog posts</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-3/4">
          <Banner posts={latestPost}/>
        </div>
        <div className="w-full lg:w-[386px]">
          <h3 className="mb-4 bg-brand-primary-10 w-[12rem] text-brand-secondary-10 pl-2 font-semi-bold">
            Most recent
          </h3>
          <PostListComponent posts={recentPosts} />
        </div>
      </div>
    </div>
  );
};

export default RecentPostComponent;
