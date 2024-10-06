import Link from "next/link";
import React from "react";

interface Post {
  id: string;
  title: string;
  url: string;
}

interface PostListComponentProps {
  titlePage?: string;
  posts: Post[];
}

const PostListComponent: React.FC<PostListComponentProps> = ({ titlePage, posts }) => {
  return (
    <section>
      {titlePage && <h2 className="text-lg font-bold">{titlePage}</h2>}
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul className="flex flex-col">
          {posts.map((post) => (
            <li key={post.id} className="flex flex-col min-h-[42px]">
              <div>
                <Link href={post.url} className="text-brand-base-10 hover:underline" aria-label={`Read ${post.title}`}>
                  {post.title}
                </Link>
                <hr className="border-b-1 border-[#e7e7e7]" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostListComponent;
