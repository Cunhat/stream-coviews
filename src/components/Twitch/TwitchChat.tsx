import React from "react";
import { TwitchChat as Chat, TwitchChatProps } from "react-twitch-embed";

export const TwitchChat: React.FC<TwitchChatProps> = ({ channel }) => {
  return <Chat channel={channel} darkMode height="100%" width="100%" />;
};
