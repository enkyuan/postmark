"use client";

import React, { ReactNode } from "react";

import { TopBar } from "@monorepo/ui/components/topbar";
import { Footer } from "@monorepo/ui/components/footer";

const LandingLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <header className="sticky overflow-hidde top-0 z-20">
        <TopBar />
      </header>
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
