import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { TwitchEmbed } from "@/components/Twitch/TwitchEmbed";
import { cva } from "class-variance-authority";
import { Select } from "@ui/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMaximize } from "@fortawesome/free-solid-svg-icons";
import { Listbox, SelectData } from "@headlessui/react";

const DraggableStreamStyles = cva("absolute top-0 left-0 h-[200px] w-[200px]", {
  variants: {
    size: {
      extraSmall: "h-[100px] w-[150px]",
      small: "h-[200px] w-[300px]",
      medium: "h-[400px] w-[600px]",
      large: "h-[600px] w-[900px]",
    },
    defaultVariants: {
      size: "small",
    },
  },
});

const SIZES = [
  { value: "extraSmall", label: "Extra Small" },
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

export const DraggableStream: React.FC<{}> = () => {
  const [mount, setMount] = useState<boolean>(false);
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  const [selectedSize, setSelectedSize] = useState<SelectData>(SIZES[0]);

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
      className={DraggableStreamStyles({ size: selectedSize.value })}
    >
      <FontAwesomeIcon
        icon={faMaximize}
        height={30}
        width={30}
        className="absolute top-0 right-0 text-xl text-neutral-500"
      />
      <div className="absolute">
        <Select
          value={selectedSize}
          data={SIZES}
          onChange={setSelectedSize}
          button={
            <Listbox.Button className="">
              <FontAwesomeIcon
                icon={faGear}
                height={30}
                width={30}
                className="text-lg text-neutral-500"
              />
            </Listbox.Button>
          }
        />
      </div>
      <TwitchEmbed channel="jamiepinelive" id="floatingStream" />
    </animated.div>
  );

  return mount
    ? ReactDom.createPortal(
        floatingStream,
        document.querySelector("#floatingStreamPortal")!
      )
    : null;
};
