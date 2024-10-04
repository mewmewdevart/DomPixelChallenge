import React from "react";
import { CardBanner } from "../../molecules/card-banner/card-banner";
import PostList from "../../molecules/post-list/post-list";

const RecentPost: React.FC = () => {
  return (
    <div className="relative w-full h-fit px-5 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-4 lg:gap-10">
      <div className="w-full lg:w-3/4">
        <h2 className="mt-1 md:mt-2 lg:mt-4 font-semibold">
          Recent blog posts
        </h2>
        <CardBanner />
      </div>
      <div className="w-full lg:w-1/4">
        <h3 className="mt-1 md:mt-2 lg:mt-10 lg:mb-4 bg-brand-primary-10 w-[12.5rem] text-brand-secondary-10 pl-2 font-semi-bold">
          Most recent
        </h3>
        <PostList />
      </div>
    </div>
  );
};

export default RecentPost;
