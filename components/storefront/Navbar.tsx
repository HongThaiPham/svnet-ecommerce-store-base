import Link from "next/link";
import React from "react";
import NavbarLinks from "./NavbarLinks";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBag } from "lucide-react";

type Props = {};

const Navbar: React.FC<Props> = async ({}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-black font-bold text-xl lg:text-3xl ">
            Store<span className="text-primary">Name</span>
          </h1>
        </Link>
        <NavbarLinks />
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            <Link href={"/bag"} className="group p-2 flex items-center mr-2">
              <ShoppingBag className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                8
              </span>
            </Link>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
