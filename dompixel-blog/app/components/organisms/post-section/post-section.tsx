import React from "react";
import { Text } from "@mantine/core";

import Banner from "@organisms/banner/banner";
import { CardUserComponent } from "@molecules/card-user/card-user";

import { Post } from "@utils/types";

interface PostSectionProps {
  posts: Post[];
}

const PostSectionComponent: React.FC<PostSectionProps> = ({ posts }) => {
  if (!posts.length) {
    return <Text>No posts available.</Text>;
  }

  const currentlyPost = posts[0];
  const { title, content, author } = currentlyPost;

  return (
    <div className="relative w-full h-fit px-5 md:px-20 lg:px-40 flex flex-col gap-4">
      <h2 className="mt-1 md:mt-2 lg:mt-4 font-semibold">Recent blog posts</h2>
      <div className="flex flex-col gap-4">
        <div className="w-full">
        <Banner posts={currentlyPost} />
        </div>
        <h3 className="font-bold text-large text-center">{title}</h3>
        <p>{content}</p>
        <CardUserComponent author={author} />
      </div>
    </div>
  );
};

export default PostSectionComponent;
