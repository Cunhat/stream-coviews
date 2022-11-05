import { TwitchChat } from "@/components/Twitch/TwitchChat";
import { type NextPage } from "next";
import { DraggableStream } from "@/components/DraggableStream/DraggableStream";
import { TwitchEmbed } from "@/components/Twitch/TwitchEmbed";
import { YoutubeStream } from "@/components/Youtube";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen bg-background">
      <DraggableStream />
      <div className="h-full flex-1 p-5">
        {/* <TwitchEmbed channel="aydan" id="mainStream" /> */}
        <YoutubeStream url="DkY-6j_bHvM" />
      </div>
      <div className="h-full w-[350px] bg-pink-400">
        <TwitchChat channel="kamusLol" />
      </div>
    </div>
  );
};

export default Home;
