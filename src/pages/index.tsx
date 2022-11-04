import { type NextPage } from "next";
import { TwitchEmbed } from "@/components/Twitch/TwitchEmbed";
import { TwitchChat } from "@/components/Twitch/TwitchChat";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

const Home: NextPage = () => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  // const bind = useDrag(({ down, movement: [mx, my] }) => {
  //   api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  // });
  const bind = useDrag(({ down, offset: [ox, oy] }) =>
    api.start({ x: ox, y: oy, immediate: down })
  );

  return (
    <div className="flex h-screen bg-background">
      <animated.div
        {...bind()}
        style={{ x, y }}
        className="h-10 w-10 bg-indigo-400"
      />
      <div className="h-full flex-1 p-5">
        {/* <TwitchEmbed channel="joliveira10" /> */}
      </div>
      <div className="h-full w-[350px] bg-pink-400">
        <TwitchChat channel="joliveira10" />
      </div>
    </div>
  );
};

export default Home;
