import { TwitchEmbed } from "@/components/Twitch/TwitchEmbed";
import { YoutubeStream } from "@/components/Youtube";
import { memo } from "react";

const StreamBuilder: React.FC<{
  streamName: string;
  providerName: string;
  id: string;
}> = ({ streamName, providerName, id }) => {
  if (providerName === "twitch") {
    return <TwitchEmbed channel={streamName} id={id} />;
  } else {
    return <YoutubeStream url={streamName} id={id} />;
  }
};

export const Stream = memo(StreamBuilder);
