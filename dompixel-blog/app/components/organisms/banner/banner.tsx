import Link from "next/link";
import { Card } from "@mantine/core";

import Overlay from "@atoms/overlay/overlay";
import Text from "@atoms/text/text";
import PostInfo from "@molecules/post-info/postInfo";

import style from "./banner.module.css";

import { Post } from "@utils/types";

interface BannerProps {
  titlePage?: string;
  posts: Post | null;
}

const Banner: React.FC<BannerProps> = ({ posts }) => {
  if (!posts) {
    return (
      <Text
        size="sm"
        className="text-center h-full flex items-center justify-center w-full bg-gray-300"
      >
        No posts available.
      </Text>
    );
  }

  const getShortenedText = (text: string | undefined) => {
    if (!text) return "";
    return text.length > 100 ? `${text.slice(0, 100)}...` : text;
  };

  const formattedDate = new Date(posts.date).toLocaleDateString("en-GB");
  const description = getShortenedText(posts.shortDescription);

  const cardContent = (
    <>
      <Overlay className={style.overlay} opacity={0.7} zIndex={0} />
      <div className={style.content}>
        <Text size="lg" fw={700} className={style.title}>
          {posts.title}
        </Text>
        <PostInfo author={posts.author} date={formattedDate} description={description} />
      </div>
    </>
  );

  return posts.url ? (
    <Link href={posts.url} aria-label={`Read more about ${posts.title}`}>
      <Card
        className={style.card}
        style={{
          height: "240px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${posts.image})`,
        }}
      >
        {cardContent}
      </Card>
    </Link>
  ) : (
    <Card
      className={style.card}
      style={{
        height: "240px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${posts.image})`,
      }}
    >
      {cardContent}
    </Card>
  );
};

export default Banner;
