import { memo } from "react";

type YoutubeStreamProps = {
  url: string;
};

const Youtube: React.FC<YoutubeStreamProps> = ({ url }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${url}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export const YoutubeStream = memo(Youtube);
