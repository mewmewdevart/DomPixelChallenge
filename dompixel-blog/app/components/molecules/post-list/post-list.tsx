import React from "react";
import Link from "next/link";

import { notifications } from '@mantine/notifications';

import { Post } from "@utils/types";
import HeroIcon from "@atoms/hero-icon";

interface PostListComponentProps {
  title?: string;
  posts: Post[];
  classname?: string;
  isPanel?: boolean;
}

const handleClick = () => {
  notifications.show({
    title: 'Error',
    message: 'Something went wrong. Please try again later',
    color: 'red',
  });
};

const PostListComponent: React.FC<PostListComponentProps> = ({
  title,
  posts,
  classname,
  isPanel,
}) => {
  return (
    <section className={classname}>
      {title && (
        <h2 className="my-1 md:my-2 lg:my-4 bg-brand-primary-10 w-[12rem] text-brand-secondary-10 pl-2 font-semi-bold">
          {title}
        </h2>
      )}
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul className="flex flex-col">
          {posts.map((post) => (
            <li key={post.id} className="flex flex-col min-h-[42px]">
              <div className={`flex ${title ? "flex-row gap-2" : "flex-col"}`}>
                {isPanel && (
                  <div className="flex flex-row gap-2">
                    <button onClick={handleClick}>
                      <HeroIcon
                        type="solid"
                        icon="PencilSquareIcon"
                        extraClassNames=" w-6 h-6 text-brand-secondary-10 bg-[#444444]"
                      />
                    </button>
                    <button onClick={handleClick}>
                      <HeroIcon
                        type="solid"
                        icon="TrashIcon"
                        extraClassNames=" w-6 h-6 text-brand-secondary-10 bg-support-error-10"
                      />
                    </button>
                  </div>
                )}
                <Link
                  href={post.url}
                  className="text-brand-base-10 hover:underline"
                  aria-label={`Read ${post.title}`}
                >
                  {post.title}
                </Link>
                <hr className="border-b-1 border-[#e7e7e7]" />
              </div>
              {title && (<hr className="mt-2 border-b-1 border-[#e7e7e7]" />)}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostListComponent;
