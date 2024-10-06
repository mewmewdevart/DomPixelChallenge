import Link from "next/link";
import { Card, Overlay, Text } from "@mantine/core";

import style from "./card.module.css";

interface Post {
  id: string;
  title?: string;
  image: string;
  date: string;
  shortDescription?: string;
  author?: string;
  url?: string;
}

interface CardBannerProps {
  titlePage?: string;
  posts: Post | null;
}

const CardBannerComponent: React.FC<CardBannerProps> = ({ posts }) => {
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

  if (!posts.url) {
    return (
      <Card
        className={style.card}
        style={{
          height: "240px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${posts.image})`,
        }}
      >
        <Overlay className={style.overlay} opacity={0.7} zIndex={0} />
        <div className={style.content}>
          <Text size="lg" fw={700} className={style.title}>
            {posts.title}
          </Text>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <Text size="sm" className={style.description}>
                {getShortenedText(posts.shortDescription)}
              </Text>
              <div className="flex flex-row gap-4">
                {posts.author && (
                  <div className={style.descriptionBlock}>
                    <span className="text-xs">Written by</span>
                    <Text size="sm" className="font-semibold">
                      {posts.author}
                    </Text>
                  </div>
                )}
                <div className={style.descriptionBlock}>
                  <span className="text-xs">Published on</span>
                  <Text size="sm" className="font-semibold">
                    {formattedDate}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
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
        <Overlay className={style.overlay} opacity={0.7} zIndex={0} />
        <div className={style.content}>
          <Text size="lg" fw={700} className={style.title}>
            {posts.title}
          </Text>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <Text size="sm" className={style.description}>
                {getShortenedText(posts.shortDescription)}
              </Text>
              <div className="flex flex-row gap-4">
                {posts.author && (
                  <div className={style.descriptionBlock}>
                    <span className="text-xs">Written by</span>
                    <Text size="sm" className="font-semibold">
                      {posts.author}
                    </Text>
                  </div>
                )}
                <div className={style.descriptionBlock}>
                  <span className="text-xs">Published on</span>
                  <Text size="sm" className="font-semibold">
                    {formattedDate}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CardBannerComponent;
