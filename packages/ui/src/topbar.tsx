// TODO: add noisy effect to animated cursor

"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export const TopBar = () => {
  return (
    <div className="py-4">
      <TabContainer />
    </div>
  );
};

const TabContainer = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 bg-transparent bg-clip-padding border-transparent backdrop-filter backdrop-blur-md bg-opacity-8 p-1"
    >
      <Link href="/">
        <Tab setPosition={setPosition}>Home</Tab>
      </Link>
      <Link href="/status">
        <Tab setPosition={setPosition}>Status</Tab>
      </Link>
      <Link href="/roadmap">
        <Tab setPosition={setPosition}>Roadmap</Tab>
      </Link>
      <Link href="/auth">
        <Tab setPosition={setPosition}>Get Started</Tab>
      </Link>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-secondary md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-accent md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
