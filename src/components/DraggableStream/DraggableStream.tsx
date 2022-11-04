import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { TwitchEmbed } from "@/components/Twitch/TwitchEmbed";

export const DraggableStream: React.FC<{}> = () => {
  const [mount, setMount] = useState<boolean>(false);
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  const bind = useDrag(({ down, offset: [ox, oy] }) =>
    api.start({ x: ox, y: oy, immediate: down })
  );

  const floatingStream = (
    <animated.div
      {...bind()}
      style={{ x, y }}
      className="absolute top-0 left-0 h-[200px] w-[200px]"
    >
      <div className="absolute h-6 w-6 bg-pink-400"></div>
      <TwitchEmbed channel="kamusLol" id="floatingStream" />
    </animated.div>
  );

  return mount
    ? ReactDom.createPortal(
        floatingStream,
        document.querySelector("#floatingStreamPortal")!
      )
    : null;
};
