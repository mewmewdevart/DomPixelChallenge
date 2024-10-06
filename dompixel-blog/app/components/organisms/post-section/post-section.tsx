import React from "react";

import CardBannerComponent  from "@molecules/card-banner/card-banner";
import { CardUserComponent } from "@molecules/card-user/card-user";

interface Post {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  author: string;
  date: string;
  image: string;
  url: string;
}

interface PostSectionProps {
  posts: Post[];
}

const PostSectionComponent: React.FC<PostSectionProps> = ({ posts }) => {
  const currentlyPost = posts[0];

  const { title, shortDescription, author, url, ...restOfPost } = currentlyPost;

  return (
    <div className="relative w-full h-fit px-5 md:px-20 lg:px-40 flex flex-col gap-4">
      <h2 className="mt-1 md:mt-2 lg:mt-4 font-semibold">Recent blog posts</h2>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <CardBannerComponent posts={restOfPost} />
        </div>
        <h3 className="font-bold text-large text-center">Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          sagittis est sed ipsum tincidunt mollis. Nulla facilisi. Vestibulum ut
          facilisis est, pretium mollis tortor. Cras et diam arcu. Donec id nibh
          vel mauris mattis dictum volutpat a mi. Phasellus lobortis, tortor eu
          pharetra ullamcorper, ex libero porta diam, vitae pellentesque elit
          leo efficitur purus. Pellentesque in nulla libero. Nulla felis quam,
          pretium tincidunt quam in, auctor convallis lectus. Phasellus maximus
          lacinia dui non tempus. Nulla id ipsum dui. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec sagittis est sed ipsum
          tincidunt mollis. Nulla facilisi. Vestibulum ut facilisis est, pretium
          mollis tortor. Cras et diam arcu. Donec id nibh vel mauris mattis
          dictum volutpat a mi. Phasellus lobortis, tortor eu pharetra
          ullamcorper, ex libero porta diam, vitae pellentesque elit leo
          efficitur purus. <br></br> <br></br> Pellentesque in nulla libero. Nulla felis quam,
          pretium tincidunt quam in, auctor convallis lectus. Phasellus maximus
          lacinia dui non tempus. Nulla id ipsum dui. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec sagittis est sed ipsum
          tincidunt mollis. Nulla facilisi. Vestibulum ut facilisis est, pretium
          mollis tortor. Cras et diam arcu. Donec id nibh vel mauris mattis
          dictum volutpat a mi. Phasellus lobortis, tortor eu pharetra
          ullamcorper, ex libero porta diam, vitae pellentesque elit leo
          efficitur purus. Pellentesque in nulla libero. Nulla felis quam,
          pretium tincidunt quam in, auctor convallis lectus. Phasellus maximus
          lacinia dui non tempus. Nulla id ipsum dui.
        </p>
        <CardUserComponent/>
      </div>
    </div>
  );
};

export default PostSectionComponent;
