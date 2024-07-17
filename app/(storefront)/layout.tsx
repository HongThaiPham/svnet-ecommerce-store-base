import Navbar from "@/components/storefront/Navbar";
import React, { PropsWithChildren } from "react";

type Props = {};

const StorefrontLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
    </>
  );
};

export default StorefrontLayout;
