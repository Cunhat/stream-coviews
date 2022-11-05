import { useState } from "react";
import { TwitchChat } from "@/components/Twitch/TwitchChat";
import { type NextPage } from "next";
import { MemoizedDraggableStream } from "@/components/DraggableStream/DraggableStream";
import { TwitchEmbed } from "@/components/Twitch/TwitchEmbed";
import { YoutubeStream } from "@/components/Youtube";
import { Button } from "@ui/Button";

const Home: NextPage = () => {
  const [hideChat, setHideChat] = useState<boolean>(false);
  return (
    <div className="flex h-screen bg-background">
      <MemoizedDraggableStream />
      <div className="flex h-full flex-1 flex-col p-5">
        {/* <TwitchEmbed channel="aydan" id="mainStream" /> */}
        <div className="flex-1">
          <YoutubeStream url="DkY-6j_bHvM" />
        </div>
        <div className="ml-auto flex h-20 items-center gap-4">
          <Button
            onClick={() => setHideChat(!hideChat)}
            type="primary"
            text="Hide chat"
          />
          {/* <Button type="secondary" text="Hide chat" /> */}
        </div>
      </div>
      {!hideChat && (
        <div className="h-full w-[350px]">
          <TwitchChat channel="kamusLol" />
        </div>
      )}
    </div>
  );
};

export default Home;
