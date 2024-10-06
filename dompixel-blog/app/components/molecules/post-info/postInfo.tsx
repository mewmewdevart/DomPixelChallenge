import React from "react";
import Text from "@atoms/text/text";
import style from "./postinfo.module.css";

interface PostInfoProps {
  author?: string;
  date: string;
  description: string;
}

const PostInfo: React.FC<PostInfoProps> = ({ author, date, description }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5">
      <Text size="sm" className={style.description}>
        {description}
      </Text>
      <div className="flex flex-row gap-4">
        {author && (
          <div className={style.descriptionBlock}>
            <span className="text-xs">Written by</span>
            <Text size="sm" className="font-semibold">{author}</Text>
          </div>
        )}
        <div className={style.descriptionBlock}>
          <span className="text-xs">Published on</span>
          <Text size="sm" className="font-semibold">{date}</Text>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
