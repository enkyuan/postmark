import { cn } from "@/lib/utils";
import React from "react";
import { Grid, GridItem } from "@/components/landing/grid";
import {
  IconCards,
  IconSignature,
  IconHighlight,
  IconBrandOpenSource,
} from "@tabler/icons-react";

export function Bento() {
  return (
    <div className="py-20">
    <Grid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <GridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </Grid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "Anki-style Flashcards",
    description: "Short-form content centered on what you've read.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconCards className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Personal Annotations",
    description: "Your own thoughts to keep you engaged.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Summaries & Highlights",
    description: "Content for skimming through large texts.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconHighlight className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Always Free & Open Source",
    description: "Free of charge & available for self-hosting.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconBrandOpenSource className="h-4 w-4 text-neutral-500" />,
  },
];
