"use client";

import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { TabBar } from "@monorepo/ui/components/tab-bar";
import { Footer } from "@monorepo/ui/components/footer";

const LandingLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <TabBar />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
