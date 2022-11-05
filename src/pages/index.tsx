import { useState } from "react";
import { TwitchChat } from "@/components/Twitch/TwitchChat";
import { type NextPage } from "next";
import { MemoizedDraggableStream } from "@/components/DraggableStream/DraggableStream";
import { TwitchEmbed } from "@/components/Twitch/TwitchEmbed";
import { YoutubeStream } from "@/components/Youtube";
import { Button } from "@ui/Button";
import {
  faArrowRightFromBracket,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Home: NextPage = () => {
  const [hideChat, setHideChat] = useState<boolean>(false);
  const fullscreen = useFullScreenHandle();

  return (
    <div className="flex h-screen bg-background">
      <div className="flex h-full flex-1 flex-col p-5">
        {/* <TwitchEmbed channel="aydan" id="mainStream" /> */}
        <FullScreen className="flex-1" handle={fullscreen}>
          <MemoizedDraggableStream />
          <YoutubeStream url="DkY-6j_bHvM" />
        </FullScreen>
        <div className="ml-auto flex h-20 items-center gap-4">
          <Button
            onClick={() => setHideChat(!hideChat)}
            type="primary"
            text={!hideChat ? "Hide chat" : "Show chat"}
            icon={faArrowRightFromBracket}
          />
          <Button
            type="secondary"
            text="Fullscreen"
            onClick={fullscreen.active ? fullscreen.exit : fullscreen.enter}
            icon={faExpand}
          />
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
