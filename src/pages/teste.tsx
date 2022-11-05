import { useState } from "react";
import { TwitchChat } from "@/components/Twitch/TwitchChat";
import { type NextPage } from "next";
import { MemoizedDraggableStream } from "@/components/DraggableStream/DraggableStream";
import { Button } from "@ui/Button";
import {
  faArrowRightFromBracket,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useRouter } from "next/router";
import { Stream } from "@/components/StreamBuilder";

const Teste: NextPage = () => {
  const [isCoView, setIsCoView] = useState<boolean>(false);
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 bg-background">
      <h1 className="text-4xl font-bold text-white">
        Welcome to your multi-stream platform!
      </h1>
      <div className="flex w-[200px] flex-col gap-5">
        <Button
          text="Co-view stream"
          type="primary"
          onClick={() => {}}
          size="full"
        />
        <Button
          text="Multi-stream"
          type="secondary"
          onClick={() => {}}
          size="full"
        />
      </div>

      {/* <h2 className="text-xl text-white">Choose your main stream provider</h2> */}
      {/* <div className="rounded-lg border-indigo-700 bg-indigo-600 p-5 hover:cursor-pointer hover:border-indigo-800 hover:bg-indigo-700">
        <h2 className="text-xl text-white">Co-view stream</h2>
      </div> */}
    </div>
  );
};

export default Teste;
